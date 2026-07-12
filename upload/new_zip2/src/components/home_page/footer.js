import { Logo } from "../ui/ui_components"





export const Footer=()=>{



    return ( <footer className="bg-[#252422]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo dark />
              <p className="mt-4 max-w-xs text-sm text-[#ccc5b9]">
                SEO services exclusively for roofing contractors. More leads,
                higher rankings, stronger businesses.
              </p>
              <div className="mt-5 flex gap-4">
                {/* {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <Icon
                    key={i}
                    className="h-4 w-4 text-[#ccc5b9] transition-colors hover:text-[#eb5e28]"
                  />
                ))} */}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#fffcf2]">
                SEO Services
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-[#ccc5b9]">
                <li>Reputation Management</li>
                <li>Local SEO</li>
                <li>Web Design</li>
                <li>AI Search Visibility</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#fffcf2]">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-[#ccc5b9]">
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#fffcf2]">
                Get a Free SEO Audit
              </h4>
              <p className="mt-4 text-sm text-[#ccc5b9]">
                Find out what&apos;s holding your website back and how we can
                help.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#eb5e28] px-5 py-2.5 text-sm font-bold text-[#fffcf2] hover:bg-[#d94f1c]">
                Get My Free Audit
              </button>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#403d39] pt-6 text-xs text-[#ccc5b9] sm:flex-row">
            <span>© 2026 Roofer SEO Co. All Rights Reserved.</span>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>)
}