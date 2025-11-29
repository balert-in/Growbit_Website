import { Shield, UserCircle, Database, Share2, Cookie, Link as LinkIcon, Lock, Clock, UserCheck, Mail, MessageSquare } from 'lucide-react';
export const privacyContent = [
    {
      id: "introduction",
      title: "Introduction",
      icon: Shield,
      content: `We Growbit Pvt Ltd take your privacy very seriously and are committed to protecting your personal data (meaning any information about you from which you can be identified).
  
  Growbit Pvt Ltd is the data controller who is responsible for your personal data (collectively referred to as "we", "us" or "our") in this privacy statement. If you do not agree to the processing of your personal data in the way this Privacy Statement describes, please do not provide your personal data.
  
  This Privacy Statement explains what personal data we collect when you access our website at www.growbit.in or engage with us on social media platforms (including our Facebook, Twitter, YouTube, Instagram pages), and/or when you otherwise interact or communicate with us.
  
  Growbit Pvt Ltd provides an enhanced tool wrapped with WhatsApp Web that allows us to store, manipulate, analyse and transfer messages between us and customer Personal/Business WhatsApp.
  
  We keep our privacy practices under review and may change this Privacy Statement from time to time by posting changes on the services or otherwise by notifying you. You are also responsible for periodically reviewing any changes which may be made to the Privacy Statement.`
    },
    {
      id: "personal-data-collection",
      title: "Collection of Personal Data",
      icon: UserCircle,
      content: `We may collect information or pieces of information that could allow you to be identified, including:
  
  A) Information you provide us directly:
  When you register as a user for the online Services (through a paid subscription or trial offer) and/or use the services you provide us with certain information that we store. This may include:
  • Personal identifiers (such as your name, username, social media name, address, email address, password, and phone number)
  • Device identifiers (such as your carrier identifier)
  • Personal characteristics (such as your date of birth, gender, and the language you speak)
  • Financial information (such as payment card information and UPI address any other)
  • Audio and visual information (such as account photo, other photos, and other materials)
  • Geolocation data and other metadata
  • Inferences from any of the above categories about your preferences
  
  B) Information collected from third parties:
  We may receive information about you from third parties who may have collected and transferred your personal data to us in accordance with their own privacy policies and/or terms of use.
  
  C) Information we get when you use our services:
  We collect the technical data automatically as you interact with our services by using cookies and other similar web technologies.`
    },
//     {
//       id: "sms-data-privacy-policy",
//       title: "SMS & E-Mail Data Privacy Policy",
//       icon: MessageSquare,
//       content: `As part of our commitment to protecting your data and being transparent about how we use it, this policy outlines how **growbit** accesses, processes, and safeguards your **SMS data (Android only) and Email data**, particularly for the purpose of **tracking expenses and related usage insights**. This policy is meant to align with our existing privacy framework and comply with data protection regulations.

// **1. Platform Availability**
// • **SMS Access**: Available exclusively on Android devices due to platform restrictions
// • **Email Access**: Available on both Android and iOS devices through secure Gmail API integration

// **2. Purpose of Data Access**
// A. SMS Access (Android Only):
// growbit requests permission to access your SMS messages **only for the following purpose**:
//   • **Expense Tracking**: To identify and extract **transactional SMS messages** (such as banking, travel bookings, fuel payments, tolls, and e-commerce-related messages) that can help auto-generate your trip expenses, monitor budget usage, and simplify financial reporting within the app.
// We **do not read, store, or collect personal messages, OTPs, or promotional messages** for any purpose.

// B. Email Access (All Platforms):
// growbit requests read-only access to your Gmail account to:
//   • Identify and process transaction-related emails (receipts, bookings, tickets)
//   • Extract expense information from verified sender domains
//   • Automatically categorize and organize travel-related documents
// We **never access personal emails or use your data for any other purpose.**

// **3. What Data is Collected**
// A. From SMS (Android Only):
// Once permission is granted, growbit's secure processing module will extract the following **non-sensitive transactional data**:
//   • Sender (Bank/Service Name)
//   • Amount Transacted
//   • Date and Time of Transaction
//   • Transaction Type (e.g., Debit, Credit, Fuel, Toll, Booking)
//   • Description (where available, such as merchant name or bill reference)

// B. From Email (All Platforms):
// We only process emails from verified commercial senders to extract:
//   • Transaction details from e-commerce platforms
//   • Travel booking confirmations and itineraries
//   • Digital receipts and invoices
//   • Subscription and service payments
// This data is **strictly used** for generating and updating **expense reports and budget dashboards during and after trip planning.**

// **4. Scope of Access**
//   • growbit does **not continuously monitor or fetch** SMS messages in real-time.
//   • Access is restricted to **only messages received within a limited period** (e.g., past 90 days), and **only if explicitly approved by the user.**
//   • The app operates using **on-device processing** for categorization; only minimal metadata is sent to growbit servers if needed for syncing across devices.

// **5. User Consent & Control**
//   • growbit will **request explicit permission** for SMS and Email access through Android's standard permission system and Gmail API consent screen.
//   • Users have full control to **deny or revoke SMS or Email permission** at any time from their device settings or Google account settings.
//   • If permission is denied, growbit will still work, but expense auto-tracking via SMS or Email will be disabled.

// **6. Usage of Data**
// SMS and Email data is used for:
//   • Auto-generating expense logs
//   • Enriching trip planning insights
//   • Sending expense reports
//   • Alerting users for over-budget categories
//   • Providing usage analytics for personal finance
// **SMS and Email data is NOT used for marketing, advertising, or profiling.**

// **7. Data Storage & Security**
//   • SMS and Email data that is parsed and stored is **encrypted both at rest and in transit** using industry-standard AES-256 encryption.
//   • Our systems use **tokenized identifiers** and avoid storing raw message or email content wherever possible.
//   • growbit's servers are hosted in **India**, complying with data localization norms.
//   • Access to this data is **strictly limited** to authenticated internal services; no human or third-party has direct access to user SMS or Email data.

// **8. Third-Party Access**
//   • We do not **share or sell SMS or Email data to third-party entities.**
//   • We may use **third-party cloud infrastructure (e.g., Google Cloud, AWS India region)** only for encrypted data storage, never for raw SMS or Email content.

// **9. Data Retention Policy**
//   • SMS and Email-derived expense data is retained **only as long as the user account is active.**
//   • If a user deletes their account or explicitly requests deletion of their SMS or Email data:
//     • All data, including parsed SMS and Email information, is **deleted permanently within 7 business days.**
//     • Logs and backups (if any) are **purged within 30 days from deletion request.**

// **10. User Rights**
// In accordance with applicable privacy laws, users have the following rights regarding SMS and Email data:
//   • Right to Access: View how SMS and Email data is used in your profile or reports.
//   • Right to Revoke Consent: Disable SMS or Email access anytime.
//   • Right to Correction: Manually edit or delete any expense entry.
//   • Right to Erasure: Permanently delete your data from our system.

// **11. Fraud Detection & Abuse Prevention**
// To ensure platform safety:
//   • Some SMS and Email patterns are cross-verified with known fraudulent sender IDs.
//   • Suspicious or unknown patterns are **not parsed or stored.**
//   • This helps maintain the quality and authenticity of the expenses recorded.

// **12. Children's Data**
// Our app is **not intended for users under the age of 18.** We do not knowingly collect or process SMS or Email data from minors. If we become aware of such usage, we will delete the information promptly.

// **13. Changes to This Policy**
// growbit may revise this policy occasionally. Users will be notified via:
//   • In-app alerts
//   • Email notifications
//   • App update changelog
// Your continued use of the app after changes implies acceptance of the updated policy.`
//     },
    {
      id: "usage-of-information",
      title: "Usage of Information",
      icon: Database,
      content: `The information collected from you may be used to operate, provide, develop and improve our services. Data like demographic and identity data online identifiers personal data and other technical data is used to:
  
  • Send you technical notices updates, security alerts and support and administrative messages
  • Verify your identity and provide you access to our services
  • Respond to your comments questions request and provide customer service
  • Communicate with you about products, services to provide news and information
  • Monitor and analyse trends, usage and activities in connection with our services
  • Revise, modify, enhance and update existing services and develop new services
  • Detect, investigate and prevent fraudulent transactions and other illegal activities
  • Personalize the services and present you with advertising
  • Link or combine with information we get from others
  • Enforce our terms of service and other policies`
    },
    {
      id: "sharing-personal-data",
      title: "Sharing Your Personal Data",
      icon: Share2,
      content: `We may share your personal data with:
  
  • Any member of our Group. The term "Group" shall mean any entity that is controlled by us or any entity that is in control of us or any entity that is under common control with us, whether directly or indirectly.
  • Our employees, vendors, agents and professional advisors working on our behalf for the purposes described in this policy statement
  • Service-providers who assist in protecting and securing our systems
  
  We usually do not share other personal Data collected from the Website with other third parties. However, this may happen if:
  • You request or authorize us to do so
  • We need to comply with applicable law or respond to valid legal process
  • We need to operate and maintain the security of this website`
    },
    {
      id: "cookies",
      title: "Use of Cookies And Other Trackers",
      icon: Cookie,
      content: `We use temporary and permanent cookies, tags, scripts, and other similar technologies to identify users of our services and to enhance user experience, identify visitors, track website navigation, gather demographic information about visitors and users, understand email campaign effectiveness and for tracking your activities on our websites.
  
  We use third party tracking services like "Google Analytics" and (any other) to understand the behaviour of our visitors and serve them better. You can set your browser not to accept cookies. However, in a few cases, some of our website features may not function as a result. Please refer to our Cookie Policy for more information.`
    },
    {
      id: "third-party-links",
      title: "Third Party Links",
      icon: LinkIcon,
      content: `Our website may provide links to third party websites for your information. If you access those links through our website, you will leave our website. The owners and operators of these third-party websites are responsible for their collection and/or use of your personal data and you should check their respective privacy policies.
  
  WE HEREBY DISCLAIM LIABILITY FOR ANY INFORMATION, MATERIALS, PRODUCTS, OR SERVICES POSTED OR OFFERED AT ANY OF THE THIRD-PARTY SITES LINKED TO THIS WEBSITE.`
    },
    {
      id: "security",
      title: "Security of Your Personal Data",
      icon: Lock,
      content: `We're committed to protecting our users' personal data. We implement appropriate technical and organizational measures to help protect the security of your personal data. However, be aware that no system is ever completely secure.
  
  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, altered, disclosed, or accessed in an unauthorized manner. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.`
    },
    {
      id: "data-retention",
      title: "Retention of Personal Data",
      icon: Clock,
      content: `Growbit retains personal data for as long as necessary to provide the access to and use of the website, or for other essential purposes such as complying with our legal obligations, resolving disputes and enforcing our agreements.
  
  Even if we delete your data, it may persist on backup or archival media for audit, legal, tax or regulatory purposes.
  
  In general terms, we will retain your personal data for the duration of your involvement/engagement with us and for as long as reasonably necessary afterwards.`
    },
    {
      id: "legal-rights",
      title: "Your Individual Legal Rights",
      icon: UserCheck,
      content: `You have the following rights in relation to your Data:
  
  • Right to access - You have the right to request copies of your personal data
  • Right to rectification - You have the right to request to correct any information
  • Right to erasure - You have the right to request to erase your personal data
  • Right to restriction - You have the right to request to restrict the processing
  • Right to data portability - You have the right to request to transfer the data
  • Right to object - You have the right to object to processing your personal data
  
  Requests should be made in writing, and we may ask you to verify your identity along with your request. If you make a request, we have one month to respond to you.`
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: Mail,
      content: `If you would like to exercise any of these rights or have any questions about our privacy policy, please contact us:
  
  • Via Email: hello@growbit.in
  • Via Phone: (+91) 90638 90638
  • Via Address: Vasavi Colony B, Plot No- 18 B Vikrampuri Colony, Karkhana Secunderabad, Telangana 500015, India`
    }
  ];