"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/admin/ui/Badge";
import type { BadgeVariant } from "@/components/admin/ui/Badge";
import { TemplateViewer } from "@/components/admin/ui/TemplateViewer";
import {
  type AdminServiceRequest,
  type ServiceRequestStatus,
  type FullDetailResponse,
  type AdminContractDetail,
  type AdminWaiverDetail,
  type PhaseBadge,
  type TimelineEvent,
  type AdminFlag,
  type FullDetailFinancials,
  type CustomerSideEntered,
  type ProviderSideEntered,
  getServiceRequestCustomerName,
  getServiceRequestProviderName,
  getServiceRequestCategoryName,
  formatCurrency,
  formatTimelineEventLabel,
  getFlagSeverity,
  isContractFullySigned,
  isWaiverFullySigned,
} from "@/lib/admin/service_requests";

const STATUS_VARIANT: Record<ServiceRequestStatus, BadgeVariant> = {
  open: "pending",
  matched: "pending",
  contract_signed: "pending",
  en_route: "pending",
  arrived: "pending",
  in_progress: "active",
  completed: "active",
  cancelled: "suspended",
};

function formatDateTime(dateStr?: string | null): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return isNaN(d.getTime())
    ? dateStr
    : d.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
}

function formatDateOnly(dateStr?: string | null): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return isNaN(d.getTime())
    ? dateStr
    : d.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

/**
 * Normalize the various `photos` shapes that can come back from the backend
 * into a flat string[] of image URLs. Prefers the provider-side photos
 * array (richer shape with kind/created_at), falls back to the plain-detail
 * `photos` field which Swagger types as a plain string (single URL,
 * comma-separated list, or JSON-encoded array serialized to string).
 */
function normalizePhotos(
  providerSide: ProviderSideEntered | null,
  rawPhotos: unknown
): string[] {
  if (providerSide?.photos && providerSide.photos.length > 0) {
    return providerSide.photos
      .map((p) => p?.image)
      .filter((u): u is string => typeof u === "string" && u.length > 0);
  }
  if (typeof rawPhotos !== "string" || !rawPhotos.trim()) return [];
  try {
    const parsed = JSON.parse(rawPhotos);
    if (Array.isArray(parsed)) {
      return parsed.filter((v): v is string => typeof v === "string");
    }
  } catch {
    // fall through
  }
  if (rawPhotos.includes(",")) {
    return rawPhotos.split(",").map((s) => s.trim()).filter(Boolean);
  }
  return [rawPhotos];
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  const isEmpty = value === "—" || value == null || value === "";
  return (
    <div className="flex items-start justify-between gap-6 py-3.5 transition-colors hover:bg-[#F5F8FF] sm:px-2 rounded-lg">
      <span className="shrink-0 text-sm font-medium text-[#64748B]">{label}</span>
      <span
        className={
          isEmpty
            ? "text-right text-sm text-[#CBD5E1]"
            : "text-right text-sm font-medium text-[#0D1B2A]"
        }
      >
        {value ?? "—"}
      </span>
    </div>
  );
}

function SectionCard({
  title,
  accent,
  actions,
  children,
}: {
  title: string;
  accent?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 flex items-center justify-between gap-3">
        <h2
          className="font-heading text-sm font-bold uppercase tracking-wider"
          style={{ color: accent ?? "#1A73E8" }}
        >
          {title}
        </h2>
        {actions}
      </div>
      <div className="mt-2 divide-y divide-[#F1F5F9]">{children}</div>
    </section>
  );
}

function MediaThumb({
  src,
  label,
  onClick,
}: {
  src: string | null;
  label: string;
  onClick?: (src: string) => void;
}) {
  return (
    <div className="group relative flex flex-col">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">{label}</p>
      {src ? (
        <button
          type="button"
          onClick={() => onClick?.(src)}
          className="relative block h-40 w-full overflow-hidden rounded-xl border border-[#E2E8F0] shadow-sm transition-all hover:shadow-md hover:ring-2 hover:ring-[#1A73E8] hover:ring-offset-2"
          title={`View ${label} full size`}
        >
          <Image
            src={src}
            alt={label}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
            <span className="text-xs font-semibold text-white opacity-0 bg-black/50 px-2.5 py-1 rounded-md transition-opacity duration-300 group-hover:opacity-100">
              Open Asset
            </span>
          </div>
        </button>
      ) : (
        <div className="flex h-40 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#E2E8F0] bg-[#F8FAFC] text-center text-[#94A3B8]">
          <span className="text-xs font-medium">Not provided</span>
        </div>
      )}
    </div>
  );
}

function Avatar({
  src,
  name,
  size = 44,
  onEnlarge,
}: {
  src?: string | null;
  name: string;
  size?: number;
  onEnlarge: (src: string, name: string) => void;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <button
      type="button"
      onClick={() => src && onEnlarge(src, name)}
      disabled={!src}
      style={{ width: size, height: size }}
      className="group relative shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-[#E2E8F0] bg-[#F1F5F9] disabled:cursor-default"
      title={src ? "Click to enlarge" : undefined}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-[#94A3B8]">
          {initials || "?"}
        </span>
      )}
      {src && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="h-4 w-4">
            <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m21 21-4.3-4.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </button>
  );
}

function ImageLightbox({
  image,
  onClose,
}: {
  image: { src: string; name: string } | null;
  onClose: () => void;
}) {
  if (!image) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" onClick={onClose}>
      <div className="max-w-lg rounded-2xl bg-white p-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between pb-3">
          <span className="text-sm font-semibold text-[#0D1B2A]">{image.name}</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0D1B2A]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative h-[70vh] w-full">
          <Image
            src={image.src}
            alt={image.name}
            fill
            sizes="100vw"
            className="rounded-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}

// ── Phase badge pill ────────────────────────────────────────────────────

function PhaseBadgePill({ phase, side }: { phase: PhaseBadge | null | undefined; side: string }) {
  if (!phase) return null;
  const pct = phase.total_steps > 0 ? Math.min(100, (phase.step / phase.total_steps) * 100) : 0;
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
          {side} phase
        </span>
        <span className="text-[11px] font-semibold text-[#0D1B2A]">
          Step {phase.step} of {phase.total_steps}
        </span>
      </div>
      <p className="mt-1 text-xs font-medium text-[#1A73E8]">{phase.label}</p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#E2E8F0]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#1A73E8] to-[#1557B0] transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ── Flags strip ──────────────────────────────────────────────────────────

function FlagsStrip({ flags }: { flags: AdminFlag[] }) {
  if (!flags || flags.length === 0) {
    return (
      <div className="rounded-2xl border border-[#DCFCE7] bg-[#ECFDF5] px-5 py-3 text-sm font-medium text-[#166534]">
        ✓ No admin flags — this request is operating within expected parameters.
      </div>
    );
  }
  return (
    <div className="space-y-2">
      {flags.map((flag, idx) => {
        const critical = getFlagSeverity(flag.type) === "critical";
        return (
          <div
            key={`${flag.type}-${idx}`}
            className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium ${
              critical
                ? "border-[#FCA5A5] bg-[#FEF2F2] text-[#991B1B]"
                : "border-[#FDE68A] bg-[#FFFBEB] text-[#92400E]"
            }`}
          >
            <span aria-hidden>{critical ? "⛔" : "⚠️"}</span>
            <div>
              <p className="font-bold uppercase tracking-wide text-[11px]">{flag.type.replace(/_/g, " ")}</p>
              <p>{flag.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Financials ───────────────────────────────────────────────────────────

function FinancialsBox({ financials }: { financials: FullDetailFinancials }) {
  const charged = financials.payment?.amount ?? null;
  const paymentStatus = financials.payment?.status ?? financials.payment_status ?? "—";
  const isPaid = financials.payment_status === "paid";
  const isFlagged = financials.payment == null && isPaid;

  return (
    <SectionCard title="Financials" accent="#166534">
      <div className="grid grid-cols-2 gap-4 py-2 sm:grid-cols-4">
        <div className="rounded-xl bg-[#F5F8FF] p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Quoted</p>
          <p className="mt-1 font-semibold text-[#0D1B2A]">{formatCurrency(financials.quoted_price)}</p>
        </div>
        <div className="rounded-xl bg-[#F5F8FF] p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Charged</p>
          <p className="mt-1 font-semibold text-[#0D1B2A]">{formatCurrency(charged)}</p>
        </div>
        <div className="rounded-xl bg-[#ECFDF5] p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
            Refundable (incl. fee)
          </p>
          <p className="mt-1 font-semibold text-[#166534]">
            {formatCurrency(financials.refundable_amount)}
          </p>
        </div>
        <div className="rounded-xl bg-[#F5F8FF] p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Payment status</p>
          <p className="mt-1 font-semibold capitalize text-[#0D1B2A]">{String(paymentStatus)}</p>
        </div>
      </div>
      <div className="py-2">
        <InfoRow label="Payment Method" value={financials.payment_method ?? "—"} />
        {financials.payment?.paid_at && (
          <InfoRow label="Paid At" value={formatDateTime(financials.payment.paid_at)} />
        )}
        {isFlagged && (
          <p className="mt-2 text-xs font-medium text-[#B91C1C]">
            Marked paid but no payment record found — verify before refunding.
          </p>
        )}
      </div>
    </SectionCard>
  );
}

// ── Timeline ─────────────────────────────────────────────────────────────

function TimelineList({ timeline }: { timeline: TimelineEvent[] }) {
  if (!timeline || timeline.length === 0) {
    return (
      <SectionCard title="Timeline" accent="#0E7490">
        <p className="py-6 text-center text-sm font-medium italic text-[#94A3B8]">
          No timeline events recorded yet.
        </p>
      </SectionCard>
    );
  }
  return (
    <SectionCard title="Timeline" accent="#0E7490">
      <ol className="space-y-0">
        {timeline.map((event, idx) => (
          <li
            key={`${event.event}-${idx}`}
            className="flex gap-3 py-2.5 border-t border-[#F1F5F9] first:border-t-0"
          >
            <span
              className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                event.source === "customer"
                  ? "bg-[#1A73E8]"
                  : event.source === "provider"
                  ? "bg-[#7C3AED]"
                  : "bg-[#94A3B8]"
              }`}
            />
            <div className="flex flex-1 items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#0D1B2A]">
                  {formatTimelineEventLabel(event.event)}
                </p>
                <p className="text-xs uppercase tracking-wide text-[#94A3B8]">{event.source}</p>
              </div>
              <span className="shrink-0 text-xs font-medium text-[#64748B]">
                {formatDateTime(event.at)}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}

// ── Agreement template card (with view-content button) ──────────────────

function AgreementCard({
  kind,
  agreement,
  customerSignedBy,
  providerSignedBy,
  onView,
}: {
  kind: "Contract" | "Waiver";
  agreement: AdminContractDetail | AdminWaiverDetail | null | undefined;
  customerSignedBy?: string | null;
  providerSignedBy?: string | null;
  onView: () => void;
}) {
  const title = agreement?.template_name ?? agreement?.template?.title ?? `Untitled ${kind.toLowerCase()}`;
  const version = agreement?.template_version ?? agreement?.template?.version ?? null;

  let statusLabel: string;
  let statusTone: BadgeVariant;
  if (kind === "Contract") {
    const c = agreement as AdminContractDetail | null | undefined;
    statusLabel = c?.status ? c.status.replace(/_/g, " ") : "no contract";
    statusTone = isContractFullySigned(c) ? "active" : "pending";
  } else {
    const w = agreement as AdminWaiverDetail | null | undefined;
    const signed = isWaiverFullySigned(w);
    statusLabel = w ? (signed ? "both signed" : "pending") : "no waiver";
    statusTone = signed ? "active" : "pending";
  }

  const hasContent = Boolean(
    (agreement?.rendered_content ?? agreement?.content_snapshot ?? "").trim()
  );

  return (
    <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">{kind}</p>
          <h3 className="mt-0.5 font-heading text-base font-bold text-[#0D1B2A] truncate">
            {title}
          </h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            {version != null && (
              <span className="rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[11px] font-semibold text-[#475569]">
                v{version}
              </span>
            )}
            <Badge variant={statusTone}>{statusLabel}</Badge>
            {agreement?.id != null && (
              <span className="text-[11px] text-[#94A3B8]">#{agreement.id}</span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={onView}
          disabled={!agreement}
          className="shrink-0 rounded-lg border border-[#1A73E8] bg-[#EFF6FF] px-3 py-1.5 text-xs font-bold text-[#1A73E8] transition-colors hover:bg-blue-100 disabled:cursor-not-allowed disabled:border-[#E2E8F0] disabled:bg-[#F1F5F9] disabled:text-[#94A3B8]"
        >
          {hasContent ? "View Template" : "No Content"}
        </button>
      </div>

      <div className="divide-y divide-[#F1F5F9]">
        <div className="flex items-center justify-between py-2.5 text-sm">
          <span className="text-[#64748B]">Customer signature</span>
          <span className="font-medium text-[#0D1B2A]">
            {(agreement as AdminContractDetail)?.customer_signature?.typed_name ||
              customerSignedBy ||
              "Not signed"}
          </span>
        </div>
        <div className="flex items-center justify-between py-2.5 text-sm">
          <span className="text-[#64748B]">Provider signature</span>
          <span className="font-medium text-[#0D1B2A]">
            {(agreement as AdminContractDetail)?.provider_signature?.typed_name ||
              providerSignedBy ||
              "Not signed"}
          </span>
        </div>
        {(agreement as AdminContractDetail)?.customer_agreed_at && (
          <div className="flex items-center justify-between py-2.5 text-sm">
            <span className="text-[#64748B]">Customer agreed at</span>
            <span className="font-medium text-[#0D1B2A]">
              {formatDateTime((agreement as AdminContractDetail).customer_agreed_at)}
            </span>
          </div>
        )}
        {(agreement as AdminContractDetail)?.provider_agreed_at && (
          <div className="flex items-center justify-between py-2.5 text-sm">
            <span className="text-[#64748B]">Provider agreed at</span>
            <span className="font-medium text-[#0D1B2A]">
              {formatDateTime((agreement as AdminContractDetail).provider_agreed_at)}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

// ── ADMIN ACTION MODAL ────────────────────────────────────────────────────

type ActionModalProps = {
  open: boolean;
  title: string;
  description: string;
  confirmLabel: string;
  isDestructive?: boolean;
  loading: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
};

function AdminActionModal({
  open,
  title,
  description,
  confirmLabel,
  isDestructive = false,
  loading,
  error,
  success,
  onConfirm,
  onCancel,
  children,
}: ActionModalProps & { error?: string | null; success?: string | null }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-md transform rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-2xl transition-all">
        <h2 className="font-heading text-lg font-bold text-[#0D1B2A]">{title}</h2>
        <p className="mt-2 text-sm text-[#64748B] leading-relaxed">{description}</p>

        {success && (
          <div className="mt-4 rounded-xl border border-[#86EFAC] bg-[#ECFDF5] px-4 py-3 text-sm font-medium text-[#166534]">
            ✓ {success}
          </div>
        )}

        {error && !success && (
          <div className="mt-4 rounded-xl border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-sm font-medium text-[#991B1B]">
            {error}
          </div>
        )}

        {!success && children && <div className="mt-4">{children}</div>}

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="rounded-lg border border-[#E2E8F0] px-4 py-2 text-sm font-semibold text-[#64748B] hover:bg-slate-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={`rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all disabled:opacity-50 ${
              isDestructive ? "bg-[#B91C1C] hover:bg-[#991B1B]" : "bg-[#1A73E8] hover:bg-[#1557B0]"
            }`}
          >
            {loading ? "Processing..." : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── MAIN MODULE ──────────────────────────────────────────────────────────

type ActionType = "cancel" | "refund" | "reassign";
type TemplateViewerState =
  | { kind: "Contract"; agreement: AdminContractDetail | null }
  | { kind: "Waiver"; agreement: AdminWaiverDetail | null }
  | null;

export default function ServiceRequestDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  // Plain detail — gives us rich provider/customer info not present in full-detail.
  const [sr, setSr] = useState<AdminServiceRequest | null>(null);
  // Full detail — gives us contract/waiver/financials/timeline/flags/phase_badges.
  const [detail, setDetail] = useState<FullDetailResponse["data"] | null>(null);

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [pendingAction, setPendingAction] = useState<ActionType | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [cancelReason, setCancelReason] = useState("");
  const [refundAmount, setRefundAmount] = useState("");
  const [targetProviderId, setTargetProviderId] = useState("");
  type ProviderOption = { id: number; name: string; email: string; businessName: string };

  const [providers, setProviders] = useState<ProviderOption[]>([]);
  const [providersLoading, setProvidersLoading] = useState(false);
  const [providersError, setProvidersError] = useState<string | null>(null);

  const [lightboxImage, setLightboxImage] = useState<{ src: string; name: string } | null>(null);
  const [templateViewer, setTemplateViewer] = useState<TemplateViewerState>(null);

  // Load BOTH plain detail and full-detail in parallel for the fastest paint.
  const loadServiceRequest = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    setLoadError(null);

    try {
      const [plainRes, fullRes] = await Promise.allSettled([
        fetch(`/api/bff/admin/service-requests/${id}`),
        fetch(`/api/bff/admin/service-requests/${id}/full-detail`),
      ]);

      // Plain detail is required — if it failed we can't render the page.
      if (plainRes.status !== "fulfilled" || !plainRes.value.ok) {
        const body = plainRes.status === "fulfilled" ? await plainRes.value.json().catch(() => ({})) : {};
        throw new Error(body.message ?? `Failed to load request record.`);
      }
      const plainBody = await plainRes.value.json();
      setSr(plainBody.data ?? plainBody);

      // Full-detail is best-effort — page can degrade gracefully without it.
      if (fullRes.status === "fulfilled" && fullRes.value.ok) {
        const fullBody: FullDetailResponse = await fullRes.value.json();
        setDetail(fullBody.data ?? null);
      } else {
        setDetail(null);
      }
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : "Internal retrieval breakdown.");
      setSr(null);
      setDetail(null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadServiceRequest();
  }, [loadServiceRequest]);

  const loadProviders = useCallback(async () => {
    setProvidersLoading(true);
    setProvidersError(null);
    try {
      const res = await fetch(`/api/bff/admin/providers?perPage=200`);
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? "Failed to load providers.");
      }
      const body = await res.json();
      const rawList = Array.isArray(body?.data) ? body.data : [];

      const mapped: ProviderOption[] = rawList
        .filter((p: { verification_status?: string }) => p.verification_status === "approved")
        .map((p: {
          id: number;
          business_name?: string;
          user?: { id: number; fullname?: string; email?: string };
        }) => ({
          id: p.id,
          name: p.user?.fullname || p.business_name || `Provider #${p.id}`,
          email: p.user?.email ?? "",
          businessName: p.business_name || "",
        }));
      setProviders(mapped);
    } catch (err) {
      setProvidersError(err instanceof Error ? err.message : "Could not load providers.");
      setProviders([]);
    } finally {
      setProvidersLoading(false);
    }
  }, []);

  useEffect(() => {
    if (pendingAction === "reassign" && providers.length === 0 && !providersLoading) {
      loadProviders();
    }
  }, [pendingAction, providers.length, providersLoading, loadProviders]);

  const runAction = async (
    url: string,
    payload: Record<string, unknown>,
    statePatch: Partial<AdminServiceRequest>,
    successMessage: string
  ) => {
    setActionLoading(true);
    setActionError(null);
    setActionSuccess(null);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? "Administrative operation rejected execution.");
      }

      const updated = await res.json().catch(() => null);
      const updatedData = updated?.data ?? updated ?? statePatch;

      setSr((prev) => (prev ? { ...prev, ...updatedData } : prev));
      setActionSuccess(successMessage);
      setCancelReason("");
      setRefundAmount("");
      setTargetProviderId("");

      // Refresh full-detail too so signatures/financials stay in sync.
      try {
        const fresh = await fetch(`/api/bff/admin/service-requests/${id}/full-detail`);
        if (fresh.ok) {
          const freshBody: FullDetailResponse = await fresh.json();
          if (freshBody?.data) setDetail(freshBody.data);
        }
      } catch {
        // best-effort refresh
      }

      setTimeout(() => {
        setPendingAction(null);
        setActionSuccess(null);
      }, 1800);
    } catch (err) {
      setActionError(err instanceof Error ? err.message : "Action processing failure.");
    } finally {
      setActionLoading(false);
    }
  };

  const executeCancel = () =>
    runAction(
      `/api/bff/admin/service-requests/${id}/cancel`,
      cancelReason ? { reason: cancelReason } : {},
      { status: "cancelled", cancelled_at: new Date().toISOString() },
      "Request cancelled successfully."
    );

  const executeRefund = () => {
    const parsedAmount = refundAmount.trim() === "" ? undefined : parseFloat(refundAmount);
    return runAction(
      `/api/bff/admin/service-requests/${id}/refund`,
      parsedAmount != null ? { amount: parsedAmount } : {},
      {},
      "Refund processed successfully."
    );
  };

  const executeReassign = () => {
    if (!targetProviderId.trim()) return;
    return runAction(
      `/api/bff/admin/service-requests/${id}/reassign`,
      { provider: targetProviderId.trim() },
      {},
      "Provider reassigned successfully."
    );
  };

  // ── Loading & error states ────────────────────────────────────────────

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-4 w-32 animate-pulse rounded bg-[#F1F5F9]" />
        <div className="h-32 animate-pulse rounded-2xl bg-[#F1F5F9]" />
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="h-64 animate-pulse rounded-2xl bg-[#F1F5F9] lg:col-span-2" />
          <div className="h-64 animate-pulse rounded-2xl bg-[#F1F5F9]" />
        </div>
      </div>
    );
  }

  if (loadError || !sr) {
    return (
      <div className="space-y-4">
        <Link href="/admin/service-requests" className="text-sm font-semibold text-[#1A73E8] hover:underline">
          ← Back to Service Requests
        </Link>
        <div className="rounded-2xl border border-[#FCA5A5] bg-[#FEF2F2] p-6">
          <h2 className="font-heading text-lg font-semibold text-[#991B1B]">
            Couldn&apos;t load this service request
          </h2>
          <p className="mt-2 text-sm text-[#B91C1C]">{loadError ?? "Record instance index missing."}</p>
          <button
            type="button"
            onClick={loadServiceRequest}
            className="mt-4 rounded-lg border border-[#991B1B] px-4 py-2 text-sm font-semibold text-[#991B1B] hover:bg-white"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // ── Derived display values ────────────────────────────────────────────

  const customerSide: CustomerSideEntered | null = detail?.customer ?? null;
  const providerSide: ProviderSideEntered | null = detail?.provider ?? null;
  const financials: FullDetailFinancials | null = detail?.financials ?? null;
  const timeline: TimelineEvent[] = detail?.timeline ?? [];
  const flags: AdminFlag[] = detail?.flags ?? [];
  const phaseBadges = detail?.phase_badges ?? null;

  const categoryName = customerSide?.category?.name ?? getServiceRequestCategoryName(sr);
  const customerName = getServiceRequestCustomerName(sr);
  const providerName = getServiceRequestProviderName(sr);

  // Photos: prefer the provider-side photos array (richer shape) when available,
  // otherwise fall back to the plain-detail `photos` string.
  const photos: string[] = normalizePhotos(providerSide, sr.photos);

  const customerPic = sr.customer?.profile_picture;
  const providerPic = sr.matched_provider?.user?.profile_picture;
  const businessImage = sr.matched_provider?.business_image;

  const refundableAmount = financials?.refundable_amount ?? null;

  const canCancel = !["completed", "cancelled"].includes(sr.status);
  const canRefund = sr.payment_status === "paid" || sr.payment_intent != null;
  const canReassign = !["completed", "cancelled"].includes(sr.status);

  const quotedPriceDisplay = financials?.quoted_price ?? sr.quoted_price;

  return (
    <div className="space-y-6">
      <Link
        href="/admin/service-requests"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A73E8] transition-colors hover:text-[#1557B0]"
      >
        <span>←</span> Back to Service Requests
      </Link>

      {/* Hero card */}
      <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
        <div className="h-24 bg-gradient-to-r from-[#1A73E8] via-[#1557B0] to-[#0D1B2A]" />

        <div className="flex flex-wrap items-start justify-between gap-4 px-6 pb-6 sm:items-end">
          <div className="flex items-end gap-4">
            <div className="-mt-12 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-[#1A73E8] to-[#1557B0] text-xl font-bold text-white shadow-md">
              SR
            </div>
            <div className="pb-1 pt-2 sm:pt-0">
              <h1 className="font-heading text-xl font-bold text-[#0D1B2A]">Request #{String(sr.id)}</h1>
              <p className="text-sm font-medium text-[#1A73E8]">{categoryName}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 sm:pt-0">
            <Badge variant={STATUS_VARIANT[sr.status] ?? "default"}>{sr.status}</Badge>
            <Badge variant={sr.payment_status === "paid" ? "active" : "pending"}>
              {sr.payment_status ?? "Unpaid"}
            </Badge>
          </div>
        </div>

        {/* Quick stats strip */}
        <div className="grid grid-cols-2 divide-x divide-[#F1F5F9] border-t border-[#F1F5F9] sm:grid-cols-4">
          <div className="px-6 py-4 transition-colors hover:bg-[#F5F8FF]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Quoted Price</p>
            <p className="mt-1 font-semibold text-[#166534]">{formatCurrency(quotedPriceDisplay)}</p>
          </div>
          <div className="px-6 py-4 transition-colors hover:bg-[#F5F8FF]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Method</p>
            <p className="mt-1 font-semibold text-[#0D1B2A] capitalize">
              {financials?.payment_method ?? sr.payment_method ?? "None Linked"}
            </p>
          </div>
          <div className="px-6 py-4 transition-colors hover:bg-[#F5F8FF]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">City Zone</p>
            <p className="mt-1 font-semibold text-[#1A73E8]">
              {customerSide?.city ?? sr.city ?? "—"}
            </p>
          </div>
          <div className="px-6 py-4 transition-colors hover:bg-[#F5F8FF]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Registered</p>
            <p className="mt-1 font-semibold text-[#0D1B2A]">{formatDateOnly(sr.created_at)}</p>
          </div>
        </div>
      </div>

      {/* Flags strip */}
      <FlagsStrip flags={flags} />

      {/* Phase badges */}
      {phaseBadges && (
        <div className="grid gap-3 sm:grid-cols-2">
          <PhaseBadgePill phase={phaseBadges.customer} side="Customer" />
          <PhaseBadgePill phase={phaseBadges.provider} side="Provider" />
        </div>
      )}

      {/* Financials */}
      {financials && <FinancialsBox financials={financials} />}

      {/* Main grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Customer side */}
          <SectionCard title="Customer Side" accent="#1A73E8">
            <div className="flex items-center gap-3 py-3">
              <Avatar
                src={customerPic}
                name={customerName}
                onEnlarge={(src, name) => setLightboxImage({ src, name })}
              />
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">Customer</p>
                <p className="truncate text-sm font-semibold text-[#0D1B2A]">{customerName}</p>
                {sr.customer?.email && (
                  <p className="truncate text-xs text-[#64748B]">{sr.customer.email}</p>
                )}
                {sr.customer?.phone_number && (
                  <p className="truncate text-xs text-[#64748B]">{sr.customer.phone_number}</p>
                )}
              </div>
            </div>

            <InfoRow
              label="Service Address"
              value={
                customerSide?.service_address ||
                sr.service_address ||
                (sr.exact_location?.includes("POINT") ? "Preserved Coordinates" : sr.exact_location)
              }
            />
            {customerSide?.service_place_name && (
              <InfoRow label="Place Name" value={customerSide.service_place_name} />
            )}
            {customerSide?.service_place_formatted_address && (
              <InfoRow
                label="Formatted Address"
                value={customerSide.service_place_formatted_address}
              />
            )}
            {(customerSide?.service_place_latitude != null ||
              customerSide?.service_place_longitude != null) && (
              <InfoRow
                label="Coordinates"
                value={`${customerSide?.service_place_latitude ?? "—"}, ${customerSide?.service_place_longitude ?? "—"}`}
              />
            )}
            <InfoRow
              label="Scheduled At"
              value={formatDateTime(customerSide?.scheduled_at ?? null)}
            />
            <InfoRow
              label="Payment Method"
              value={customerSide?.payment_method ?? financials?.payment_method ?? "—"}
            />
            <InfoRow
              label="Payment Status"
              value={
                <Badge
                  variant={
                    (customerSide?.payment_status ?? sr.payment_status) === "paid" ? "active" : "pending"
                  }
                >
                  {customerSide?.payment_status ?? sr.payment_status ?? "—"}
                </Badge>
              }
            />
            <InfoRow
              label="Contract (Customer)"
              value={
                <Badge variant={customerSide?.contract_signed_by_customer ? "active" : "pending"}>
                  {customerSide?.contract_signed_by_customer ? "Signed" : "Pending"}
                </Badge>
              }
            />
            <InfoRow
              label="Liability Waiver (Customer)"
              value={
                <Badge variant={customerSide?.waiver_signed_by_customer ? "active" : "pending"}>
                  {customerSide?.waiver_signed_by_customer ? "Executed" : "Unexecuted"}
                </Badge>
              }
            />
            {customerSide?.needs_review && (
              <div className="mt-2 rounded-xl border border-[#FDE68A] bg-[#FFFBEB] px-4 py-2 text-xs font-semibold text-[#92400E]">
                ⚠ This request has been flagged as needing admin review.
              </div>
            )}
          </SectionCard>

          {/* Provider side */}
          <SectionCard title="Provider Side" accent="#7C3AED">
            <div className="flex items-center gap-3 py-3">
              <Avatar
                src={providerPic ?? businessImage}
                name={providerName}
                onEnlarge={(src, name) => setLightboxImage({ src, name })}
              />
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">Provider</p>
                <p className="truncate text-sm font-semibold text-[#0D1B2A]">{providerName}</p>
                {sr.matched_provider?.user?.email && (
                  <p className="truncate text-xs text-[#64748B]">
                    {sr.matched_provider.user.email}
                  </p>
                )}
              </div>
            </div>

            <InfoRow
              label="Quoted Price"
              value={formatCurrency(providerSide?.quoted_price ?? sr.quoted_price)}
            />
            <InfoRow
              label="Contract (Provider)"
              value={
                <Badge variant={providerSide?.contract_signed_by_provider ? "active" : "pending"}>
                  {providerSide?.contract_signed_by_provider ? "Signed" : "Pending"}
                </Badge>
              }
            />
            <InfoRow
              label="Liability Waiver (Provider)"
              value={
                <Badge variant={providerSide?.waiver_signed_by_provider ? "active" : "pending"}>
                  {providerSide?.waiver_signed_by_provider ? "Executed" : "Unexecuted"}
                </Badge>
              }
            />

            <InfoRow label="En Route At" value={formatDateTime(providerSide?.en_route_at ?? sr.en_route_at)} />
            <InfoRow label="Arrived At" value={formatDateTime(providerSide?.arrived_at ?? sr.arrived_at)} />
            <InfoRow label="Operations Started" value={formatDateTime(providerSide?.started_at ?? sr.started_at)} />
            <InfoRow label="Completed At" value={formatDateTime(providerSide?.completed_at ?? sr.completed_at)} />
            {sr.cancelled_at && (
              <InfoRow
                label="Terminated At"
                value={<span className="text-[#B91C1C]">{formatDateTime(sr.cancelled_at)}</span>}
              />
            )}
          </SectionCard>

          {/* Provider extended info (only from plain detail — not in full-detail response) */}
          {sr.matched_provider && (
            <SectionCard title="Provider Profile" accent="#0E7490">
              <InfoRow
                label="Business Name"
                value={sr.matched_provider.business_name || "—"}
              />
              <InfoRow
                label="Verification"
                value={
                  <Badge variant={sr.matched_provider.is_verified ? "active" : "pending"}>
                    {sr.matched_provider.is_verified ? "Verified" : "Unverified"}
                  </Badge>
                }
              />
              <InfoRow
                label="Rating"
                value={
                  <span className="font-semibold text-[#F59E0B]">
                    ★ {sr.matched_provider.rating ?? "—"}
                  </span>
                }
              />
              <InfoRow
                label="Availability"
                value={
                  <Badge variant={sr.matched_provider.is_available ? "active" : "suspended"}>
                    {sr.matched_provider.is_available ? "Available" : "Unavailable"}
                  </Badge>
                }
              />
              <InfoRow
                label="Years of Experience"
                value={sr.matched_provider.years_of_experience ?? "—"}
              />
              <InfoRow
                label="Base Rate"
                value={
                  sr.matched_provider.base_rate
                    ? `$${sr.matched_provider.base_rate}`
                    : "—"
                }
              />
              <InfoRow
                label="Payout Enabled"
                value={
                  <Badge variant={sr.matched_provider.is_payout_enabled ? "active" : "pending"}>
                    {sr.matched_provider.is_payout_enabled ? "Enabled" : "Disabled"}
                  </Badge>
                }
              />
              {sr.matched_provider.bio && (
                <InfoRow label="Bio" value={sr.matched_provider.bio} />
              )}
              {businessImage && (
                <div className="pt-3">
                  <MediaThumb
                    src={businessImage}
                    label="Business Image"
                    onClick={(src) => setLightboxImage({ src, name: "Business Image" })}
                  />
                </div>
              )}
            </SectionCard>
          )}

          <SectionCard title="Client Operational Notes" accent="#0E7490">
            <InfoRow
              label="Description"
              value={
                sr.description ? (
                  <div className="text-left font-mono text-xs whitespace-pre-wrap text-[#0D1B2A] bg-[#F5F8FF] p-3 rounded-xl border border-[#E2E8F0] mt-1">
                    {sr.description}
                  </div>
                ) : (
                  "—"
                )
              }
            />
          </SectionCard>

          <TimelineList timeline={timeline} />
        </div>

        {/* Right rail */}
        <div className="space-y-6">
          <SectionCard title="Administrative Actions" accent="#DC2626">
            <div className="flex flex-col gap-2 pt-2">
              {canReassign && (
                <button
                  type="button"
                  onClick={() => setPendingAction("reassign")}
                  className="w-full rounded-lg border border-[#93C5FD] bg-[#EFF6FF] px-3.5 py-2 text-xs font-bold text-[#1A73E8] transition-colors hover:bg-blue-100/70"
                >
                  Reassign Field Provider
                </button>
              )}
              {canRefund && (
                <button
                  type="button"
                  onClick={() => setPendingAction("refund")}
                  className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-xs font-bold text-[#0D1B2A] transition-colors hover:bg-slate-50"
                >
                  Dispatch Ledger Refund
                </button>
              )}
              {canCancel && (
                <button
                  type="button"
                  onClick={() => setPendingAction("cancel")}
                  className="w-full rounded-lg border border-[#FCA5A5] bg-[#FEF2F2] px-3.5 py-2 text-xs font-bold text-[#B91C1C] transition-colors hover:bg-[#FEF2F2]"
                >
                  Terminate Request Envelope
                </button>
              )}
              {!canCancel && !canRefund && !canReassign && (
                <span className="text-xs font-medium italic text-[#94A3B8] text-center block py-2">
                  No administrative structural overrides mutable for current archival state.
                </span>
              )}
            </div>
          </SectionCard>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h2 className="mb-2 font-heading text-sm font-bold uppercase tracking-wider text-[#0E7490]">
              Inspection Attachments
            </h2>
            <div className="mt-4 space-y-6">
              {photos.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {photos.map((url, idx) => (
                    <MediaThumb
                      key={idx}
                      src={url}
                      label={`Inspection Asset ${idx + 1}`}
                      onClick={(src) => setLightboxImage({ src, name: `Inspection Asset ${idx + 1}` })}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex h-32 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#E2E8F0] bg-[#F8FAFC] text-center text-[#94A3B8]">
                  <span className="text-xs font-medium">No files attached</span>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Contract & Waiver templates — the actual templates, with content viewer */}
      <div className="space-y-3">
        <div>
          <h2 className="font-heading text-lg font-bold text-[#0D1B2A]">
            Agreements &amp; Templates
          </h2>
          <p className="text-sm text-[#64748B]">
            Contract and waiver captured for this request. Click <strong>View Template</strong> to
            read the actual content as it was presented at signing time.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <AgreementCard
            kind="Contract"
            agreement={customerSide?.contract ?? providerSide?.contract ?? null}
            customerSignedBy={
              customerSide?.contract_signed_by_customer
                ? sr.customer?.fullname ?? sr.customer?.email ?? "Customer"
                : null
            }
            providerSignedBy={
              providerSide?.contract_signed_by_provider
                ? sr.matched_provider?.business_name ??
                  sr.matched_provider?.user?.fullname ??
                  "Provider"
                : null
            }
            onView={() =>
              setTemplateViewer({
                kind: "Contract",
                agreement: customerSide?.contract ?? providerSide?.contract ?? null,
              })
            }
          />
          <AgreementCard
            kind="Waiver"
            agreement={customerSide?.waiver ?? providerSide?.waiver ?? null}
            customerSignedBy={
              customerSide?.waiver_signed_by_customer
                ? sr.customer?.fullname ?? sr.customer?.email ?? "Customer"
                : null
            }
            providerSignedBy={
              providerSide?.waiver_signed_by_provider
                ? sr.matched_provider?.business_name ??
                  sr.matched_provider?.user?.fullname ??
                  "Provider"
                : null
            }
            onView={() =>
              setTemplateViewer({
                kind: "Waiver",
                agreement: customerSide?.waiver ?? providerSide?.waiver ?? null,
              })
            }
          />
        </div>
      </div>

      {/* Action modals */}
      <AdminActionModal
        open={pendingAction === "cancel"}
        title="Terminate Request Envelope?"
        description="Halting this service operation is irreversible. Enter optional cancellation references below."
        confirmLabel="Confirm Termination"
        isDestructive
        loading={actionLoading}
        error={actionError}
        success={actionSuccess}
        onConfirm={executeCancel}
        onCancel={() => {
          setPendingAction(null);
          setActionError(null);
          setActionSuccess(null);
        }}
      >
        <textarea
          value={cancelReason}
          onChange={(e) => setCancelReason(e.target.value)}
          rows={3}
          placeholder="Reason entry text..."
          className="w-full rounded-lg border border-[#E2E8F0] p-2.5 text-sm focus:border-[#1A73E8] focus:outline-none focus:ring-1 focus:ring-[#1A73E8]"
        />
      </AdminActionModal>

      <AdminActionModal
        open={pendingAction === "refund"}
        title="Dispatch Balance Refund"
        description={`Refundable amount (includes platform fee): ${
          refundableAmount != null
            ? formatCurrency(refundableAmount)
            : sr.quoted_price
            ? `${formatCurrency(sr.quoted_price)} (fee not confirmed)`
            : "unset value"
        }. Leave blank to run a full statement clearing refund.`}
        confirmLabel="Process Settlement"
        loading={actionLoading}
        error={actionError}
        success={actionSuccess}
        onConfirm={executeRefund}
        onCancel={() => {
          setPendingAction(null);
          setActionError(null);
          setActionSuccess(null);
        }}
      >
        <input
          type="number"
          value={refundAmount}
          onChange={(e) => setRefundAmount(e.target.value)}
          placeholder="0.00"
          step="0.01"
          min="0"
          className="w-full rounded-lg border border-[#E2E8F0] p-2.5 text-sm focus:border-[#1A73E8] focus:outline-none focus:ring-1 focus:ring-[#1A73E8]"
        />
      </AdminActionModal>

      <AdminActionModal
        open={pendingAction === "reassign"}
        title="Reassign Field Provider"
        description="Select the provider to assign to this request."
        confirmLabel="Commit Mutation"
        loading={actionLoading}
        error={actionError}
        success={actionSuccess}
        onConfirm={executeReassign}
        onCancel={() => {
          setPendingAction(null);
          setActionError(null);
          setActionSuccess(null);
        }}
      >
        {providersLoading ? (
          <p className="text-sm text-[#64748B]">Loading providers…</p>
        ) : providersError ? (
          <p className="text-sm text-[#B91C1C]">{providersError}</p>
        ) : (
          <select
            value={targetProviderId}
            onChange={(e) => setTargetProviderId(e.target.value)}
            className="w-full rounded-lg border border-[#E2E8F0] p-2.5 text-sm focus:border-[#1A73E8] focus:outline-none focus:ring-1 focus:ring-[#1A73E8]"
          >
            <option value="">Select a provider…</option>
            {providers.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
                {p.businessName ? ` — ${p.businessName}` : ""} ({p.email})
              </option>
            ))}
          </select>
        )}
      </AdminActionModal>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

      {templateViewer && (
        <TemplateViewer
          open={Boolean(templateViewer)}
          onClose={() => setTemplateViewer(null)}
          kind={templateViewer.kind}
          title={
            templateViewer.agreement?.template_name ??
            templateViewer.agreement?.template?.title ??
            `Untitled ${templateViewer.kind.toLowerCase()}`
          }
          version={
            templateViewer.agreement?.template_version ??
            templateViewer.agreement?.template?.version ??
            null
          }
          statusLabel={
            templateViewer.kind === "Contract"
              ? (templateViewer.agreement as AdminContractDetail | null)?.status?.replace(/_/g, " ") ??
                "no contract"
              : isWaiverFullySigned(templateViewer.agreement as AdminWaiverDetail | null)
              ? "both signed"
              : "pending"
          }
          statusTone={
            templateViewer.kind === "Contract"
              ? isContractFullySigned(templateViewer.agreement as AdminContractDetail | null)
                ? "active"
                : "pending"
              : isWaiverFullySigned(templateViewer.agreement as AdminWaiverDetail | null)
              ? "active"
              : "pending"
          }
          contentSnapshot={templateViewer.agreement?.content_snapshot ?? null}
          renderedContent={templateViewer.agreement?.rendered_content ?? null}
          signedAt={{
            customerName:
              (templateViewer.agreement as AdminContractDetail)?.customer_signature?.typed_name ?? null,
            customerSignedAt:
              (templateViewer.agreement as AdminContractDetail)?.customer_agreed_at ??
              (templateViewer.agreement as AdminContractDetail)?.customer_signature?.signed_at ??
              null,
            customerIp:
              (templateViewer.agreement as AdminContractDetail)?.customer_sign_ip ?? null,
            providerName:
              (templateViewer.agreement as AdminContractDetail)?.provider_signature?.typed_name ?? null,
            providerSignedAt:
              (templateViewer.agreement as AdminContractDetail)?.provider_agreed_at ??
              (templateViewer.agreement as AdminContractDetail)?.provider_signature?.signed_at ??
              null,
            providerIp:
              (templateViewer.agreement as AdminContractDetail)?.provider_sign_ip ?? null,
          }}
        />
      )}
    </div>
  );
}
