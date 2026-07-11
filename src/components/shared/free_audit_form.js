import { PrimaryButton } from "../ui/ui_components";

/**
 * Free Audit form — used on Free Audit landing page and on the homepage About section.
 * Fields: Name, Business Name, Website URL, City, Email (Phone optional).
 */
export default function FreeAuditForm({ buttonLabel = "Send Me My Free Audit" }) {
  return (
    <form
      action="/thank-you?type=free-audit"
      method="post"
      className="space-y-4"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          placeholder="Name *"
          className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
        />
        <input
          type="text"
          name="business_name"
          required
          placeholder="Business Name *"
          className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
        />
      </div>
      <input
        type="url"
        name="website_url"
        placeholder="Website URL"
        className="w-full rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
      />
      <input
        type="text"
        name="city"
        required
        placeholder="City *"
        className="w-full rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Email *"
          className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          className="rounded-md border border-[#ccc5b9] bg-[#fffcf2] px-4 py-3 text-sm placeholder:text-[#403d39]/60 focus:border-[#eb5e28] focus:outline-none"
        />
      </div>
      <PrimaryButton as="button" type="submit" className="w-full">
        {buttonLabel}
      </PrimaryButton>
      <p className="sub-heading text-center text-xs font-light text-[#403d39]/70">
        We personally review every submission — no automated reports.
      </p>
    </form>
  );
}
