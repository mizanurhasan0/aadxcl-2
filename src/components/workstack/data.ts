export type ServiceCard = {
    tag: string
    title: string
    description: string
    badge: string
    bgClass: string
    accentClass: string
    icon: string
    duration: string
    level: string
}

export const IT_SERVICES: ServiceCard[] = [
    {
        tag: 'Full Stack',
        title: 'Web Development Bootcamp',
        description: 'Master modern web development with React, Node.js, and cloud deployment. Build real-world projects and gain industry-ready skills in 12 weeks.',
        badge: 'Pro Certified',
        bgClass: 'bg-gradient-to-br from-blue-50 to-indigo-100',
        accentClass: 'from-blue-500 to-indigo-600',
        icon: '💻',
        duration: '12 weeks',
        level: 'Beginner to Advanced'
    },
    {
        tag: 'Mobile Dev',
        title: 'React Native & Flutter',
        description: 'Create cross-platform mobile applications with cutting-edge frameworks. Learn iOS and Android development in one comprehensive course.',
        badge: 'Mobile Expert',
        bgClass: 'bg-gradient-to-br from-purple-50 to-pink-100',
        accentClass: 'from-purple-500 to-pink-600',
        icon: '📱',
        duration: '10 weeks',
        level: 'Intermediate'
    },
    {
        tag: 'Cloud & DevOps',
        title: 'AWS & Docker Mastery',
        description: 'Deploy scalable applications with AWS, Docker, and Kubernetes. Master cloud architecture and DevOps practices for enterprise environments.',
        badge: 'Cloud Architect',
        bgClass: 'bg-gradient-to-br from-emerald-50 to-teal-100',
        accentClass: 'from-emerald-500 to-teal-600',
        icon: '☁️',
        duration: '8 weeks',
        level: 'Advanced'
    },
    {
        tag: 'Data Science',
        title: 'Python & Machine Learning',
        description: 'Dive into data science with Python, pandas, and TensorFlow. Build ML models and analyze big data for business insights.',
        badge: 'Data Scientist',
        bgClass: 'bg-gradient-to-br from-orange-50 to-red-100',
        accentClass: 'from-orange-500 to-red-600',
        icon: '🤖',
        duration: '14 weeks',
        level: 'Intermediate'
    },
    {
        tag: 'Cybersecurity',
        title: 'Ethical Hacking & Security',
        description: 'Learn penetration testing, network security, and ethical hacking techniques. Protect systems and earn industry certifications.',
        badge: 'Security Expert',
        bgClass: 'bg-gradient-to-br from-gray-50 to-slate-100',
        accentClass: 'from-gray-600 to-slate-700',
        icon: '🔒',
        duration: '16 weeks',
        level: 'Advanced'
    },
    {
        tag: 'UI/UX Design',
        title: 'Digital Design Systems',
        description: 'Master user experience design with Figma, prototyping, and design thinking. Create stunning interfaces that users love.',
        badge: 'Design Pro',
        bgClass: 'bg-gradient-to-br from-cyan-50 to-blue-100',
        accentClass: 'from-cyan-500 to-blue-600',
        icon: '🎨',
        duration: '6 weeks',
        level: 'Beginner'
    },
    {
        tag: 'Backend',
        title: 'Node.js & Database Design',
        description: 'Build robust backend systems with Node.js, Express, and database management. Learn API development and server architecture.',
        badge: 'Backend Master',
        bgClass: 'bg-gradient-to-br from-green-50 to-lime-100',
        accentClass: 'from-green-500 to-lime-600',
        icon: '⚙️',
        duration: '11 weeks',
        level: 'Intermediate'
    },
    {
        tag: 'AI & ML',
        title: 'Artificial Intelligence Foundations',
        description: 'Explore AI concepts, neural networks, and deep learning. Build intelligent applications using modern AI frameworks and tools.',
        badge: 'AI Specialist',
        bgClass: 'bg-gradient-to-br from-violet-50 to-purple-100',
        accentClass: 'from-violet-500 to-purple-600',
        icon: '🧠',
        duration: '18 weeks',
        level: 'Advanced'
    },
    {
        tag: 'Blockchain',
        title: 'Web3 & Smart Contracts',
        description: 'Enter the world of blockchain development with Solidity, Ethereum, and DeFi. Build decentralized applications and smart contracts.',
        badge: 'Blockchain Dev',
        bgClass: 'bg-gradient-to-br from-amber-50 to-yellow-100',
        accentClass: 'from-amber-500 to-yellow-600',
        icon: '⛓️',
        duration: '13 weeks',
        level: 'Advanced'
    }
]
