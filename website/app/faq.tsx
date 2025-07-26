
const faqData = [
    {
        title: "What is NoESN.dev?",
        description: "NoESN.dev is a browser extension that automatically hides job offers from IT consulting firms (ESNs) on platforms like LinkedIn, Indeed, Apec, and HelloWork.",
    },
    {
        title: "Why block ESN job offers?",
        description: "Some developers prefer to avoid consulting firms and focus on in-house positions, which are often perceived as more stable or better paid. NoESN.dev helps save time by filtering out these offers automatically.",
    },
    {
        title: "Which websites are supported?",
        description: "Currently, NoESN.dev supports LinkedIn, Indeed, Apec, and HelloWork. More platforms may be added in the future based on user feedback.",
    },
    {
        title: "Which companies are blocked?",
        description: "NoESN.dev filters job offers from major consulting firms like Alten, Sopra Steria, Capgemini, Atos, and many others. The list is regularly updated based on community input.",
    },
    {
        title: "Can I customize the blocked companies?",
        description: "Yes! You can add or remove companies from your personal blocklist directly in the extension settings.",
    },
    {
        title: "How does the extension detect ESN job offers?",
        description: "The extension uses company names, keywords, and a constantly evolving ESN database to identify and hide relevant job offers.",
    },
    {
        title: "Does the extension collect any personal data?",
        description: "No. NoESN.dev is privacy-friendly. It does not collect or store your personal information or browsing history.",
    },
    {
        title: "How do I install NoESN.dev?",
        description: "You can install it from the Chrome Web Store or Firefox Add-ons. A direct link is available on our official website.",
    },
    {
        title: "Can I suggest a company to block?",
        description: "Absolutely! You can submit new companies to block via a form in the extension settings or on our website.",
    },
]

export function Faq() {
    return <section className={"mx-auto flex w-full max-w-7xl  items-center justify-center gap-14 overflow-hidden px-0.5 pb-12 pt-8 max-lg:px-4 lg:gap-16 lg:pb-24 lg:pt-14"}>

        <div className={"flex basis-1/2"} style={{ height: "-webkit-fill-available"}}>
            <div>
                FAQ
            </div>
        </div>
        <div className={"flex basis-1/2 flex-col gap-2 "}>
            {faqData.map((faqData) => {
                return (
                    <div key={faqData.title} className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">{faqData.title}</div>
                        <div className="collapse-content text-sm">{faqData.description}</div>
                    </div>
                )
            })}
        </div>
    </section>
}
