import * as Icons from "lucide-react"
import servicesJson from "../../data/services.json"

export const servicesData = servicesJson.map((service) => ({
  ...service,
  // Map the string icon name to the actual Lucide-react component
  icon: (Icons as any)[service.icon] || Icons.HelpCircle,
  benefits: service.benefits.map((benefit) => ({
    ...benefit,
    // Map benefit icon as well
    icon: (Icons as any)[benefit.icon] || Icons.HelpCircle
  }))
}))
