
import { useState } from 'react';



  const Cards = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (index) => {
      setExpandedCard(expandedCard === index ? null : index);
    };

    const cardData = [
      {
        title: 'Java',
        type: 'Programming Language',
        purpose: 'General-purpose, object-oriented programming',
        features: [
          'Platform-independent (JVM)',
          'Strongly typed',
          'Rich ecosystem (Spring, Hibernate, etc.)',
        ],
        useCases: [
          'Enterprise applications',
          'Android app development',
          'Web servers (e.g., Tomcat)',
        ],
        tools: ['Spring Boot', 'Apache Maven', 'IntelliJ IDEA'],
      },
      {
        title: 'Python',
        type: 'Programming Language',
        purpose: 'General-purpose, high-level programming',
        features: [
          'Easy-to-read syntax',
          'Dynamically typed',
          'Extensive libraries (e.g., NumPy, Pandas)',
        ],
        useCases: [
          'Data science and machine learning',
          'Web development (Django, Flask)',
          'Automation and scripting',
        ],
        tools: ['TensorFlow, PyTorch', 'Flask, Django', 'Jupyter Notebook'],
      },
      {
        title: 'MERN',
        type: 'Technology Stack',
        purpose: 'Full-stack web development',
        components: [
          'MongoDB: NoSQL database',
          'Express.js: Backend framework',
          'React: Frontend library',
          'Node.js: Runtime environment',
        ],
        features: [
          'JavaScript-based (end-to-end)',
          'Scalable and flexible',
          'Rich ecosystem (npm packages)',
        ],
        useCases: [
          'Single-page applications (SPAs)',
          'Real-time applications',
          'Modern web apps',
        ],
        tools: ['Redux (state management)', 'Mongoose (ODM for MongoDB)'],
      },
      {
        title: 'DevOps',
        type: 'Methodology/Culture',
        purpose: 'Streamline software development and operations',
        practices: [
          'Continuous Integration/Continuous Deployment (CI/CD)',
          'Infrastructure as Code (IaC)',
          'Monitoring and logging',
        ],
        tools: [
          'CI/CD: Jenkins, GitLab CI, GitHub Actions',
          'Containerization: Docker, Kubernetes',
          'IaC: Terraform, Ansible',
          'Monitoring: Prometheus, Grafana',
        ],
        useCases: [
          'Automating deployments',
          'Improving collaboration between dev and ops teams',
          'Ensuring scalability and reliability',
        ],
      },
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card border rounded-lg shadow-lg p-4 cursor-pointer transition-transform transform ${
              expandedCard === index ? 'scale-105' : ''
            }`}
            onClick={() => toggleCard(index)}
          >
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p><strong>Type:</strong> {card.type}</p>
            <p><strong>Purpose:</strong> {card.purpose}</p>
            {expandedCard === index && (
              <>
                {card.features && (
                  <>
                    <h4 className="font-semibold mt-2">Key Features:</h4>
                    <ul className="list-disc list-inside">
                      {card.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
                {card.components && (
                  <>
                    <h4 className="font-semibold mt-2">Components:</h4>
                    <ul className="list-disc list-inside">
                      {card.components.map((component, i) => (
                        <li key={i}>{component}</li>
                      ))}
                    </ul>
                  </>
                )}
                {card.practices && (
                  <>
                    <h4 className="font-semibold mt-2">Key Practices:</h4>
                    <ul className="list-disc list-inside">
                      {card.practices.map((practice, i) => (
                        <li key={i}>{practice}</li>
                      ))}
                    </ul>
                  </>
                )}
                <h4 className="font-semibold mt-2">Use Cases:</h4>
                <ul className="list-disc list-inside">
                  {card.useCases.map((useCase, i) => (
                    <li key={i}>{useCase}</li>
                  ))}
                </ul>
                <h4 className="font-semibold mt-2">Popular Tools/Frameworks:</h4>
                <ul className="list-disc list-inside">
                  {card.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  export default Cards; 
      