async function parse()
{
    index()
}

async function index()
{
    //   Index with the bulk helper
    const dataa = [
      {"link": "https://arxiv.org/pdf/2402.18613.pdf", "title": "Dynamics and potential origins of decimeter-sized particles around comet.pdf", "data": "dummy"},
      {"link": "https://arxiv.org/pdf/2402.18782.pdf", "title": "Ivrii's conjecture for some cases in outer and symplectic billiards.pdf", "data": "test"},
      {"link": "https://arxiv.org/pdf/2402.18999.pdf", "title": "Mixing Times for the Facilitated Exclusion Process.pdf", "data": "hi"},
      {"link": "https://arxiv.org/pdf/2402.18593.pdf", "title": "Sustainable Supercomputing for AI GPU Power Capping at HPC Scale.pdf", "data": "yo"},
      {"link": "https://arxiv.org/pdf/2402.19027.pdf", "title": "How to Train your Antivirus RL-based Hardening through the Problem-Space.pdf", "data": "1992-06-01"},
      // Additional dummy data
      {"link": "https://arxiv.org/pdf/2402.19028.pdf", "title": "Advances in Quantum Computing Architectures.pdf", "data": "random"},
      {"link": "https://arxiv.org/pdf/2402.19029.pdf", "title": "Applications of Deep Learning in Natural Language Processing.pdf", "data": "insights"},
      {"link": "https://arxiv.org/pdf/2402.19030.pdf", "title": "Emerging Trends in Blockchain Technology.pdf", "data": "2023-10-15"},
      {"link": "https://arxiv.org/pdf/2402.19031.pdf", "title": "Efficient Algorithms for Large-scale Graph Processing.pdf", "data": "graphs"},
      {"link": "https://arxiv.org/pdf/2402.19032.pdf", "title": "Innovations in Renewable Energy Technologies.pdf", "data": "sustainability"},
      {"link": "https://arxiv.org/pdf/2402.19033.pdf", "title": "A Survey on Robotics and Automation in Manufacturing.pdf", "data": "automation"},
      {"link": "https://arxiv.org/pdf/2402.19034.pdf", "title": "Advancements in Biomedical Imaging Techniques.pdf", "data": "healthcare"},
      {"link": "https://arxiv.org/pdf/2402.19035.pdf", "title": "Future Directions in Quantum Cryptography.pdf", "data": "security"},
      {"link": "https://arxiv.org/pdf/2402.19036.pdf", "title": "Challenges in Autonomous Vehicle Navigation.pdf", "data": "transportation"},
      {"link": "https://arxiv.org/pdf/2402.19037.pdf", "title": "Recent Developments in Nanotechnology Applications.pdf", "data": "nanotech"},
      {"link": "https://arxiv.org/pdf/2402.19038.pdf", "title": "Deep Reinforcement Learning for Resource Management.pdf", "data": "resource"},
      {"link": "https://arxiv.org/pdf/2402.19039.pdf", "title": "Trends in Augmented Reality for Educational Purposes.pdf", "data": "education"},
      {"link": "https://arxiv.org/pdf/2402.19040.pdf", "title": "Machine Learning Approaches to Climate Modeling.pdf", "data": "climate"},
      {"link": "https://arxiv.org/pdf/2402.19041.pdf", "title": "Applications of Artificial Intelligence in Agriculture.pdf", "data": "agriculture"},
      {"link": "https://arxiv.org/pdf/2402.19042.pdf", "title": "Advances in Quantum Materials Research.pdf", "data": "materials"},
      {"link": "https://arxiv.org/pdf/2402.19043.pdf", "title": "Cybersecurity Measures for IoT Devices.pdf", "data": "cybersecurity"},
      {"link": "https://arxiv.org/pdf/2402.19044.pdf", "title": "Current Trends in Wearable Technology.pdf", "data": "wearables"},
      {"link": "https://arxiv.org/pdf/2402.19045.pdf", "title": "Exploring Big Data Analytics Techniques.pdf", "data": "analytics"},
      {"link": "https://arxiv.org/pdf/2402.19046.pdf", "title": "Advancements in Brain-Computer Interfaces.pdf", "data": "neurotech"},
      {"link": "https://arxiv.org/pdf/2402.19047.pdf", "title": "Innovative Applications of Virtual Reality.pdf", "data": "VR"},
      {"link": "https://arxiv.org/pdf/2402.19048.pdf", "title": "Next-Generation Mobile Communication Technologies.pdf", "data": "mobile"},
      {"link": "https://arxiv.org/pdf/2402.19049.pdf", "title": "Quantum Computing for Financial Applications.pdf", "data": "finance"},
      {"link": "https://arxiv.org/pdf/2402.19050.pdf", "title": "Robotic Surgery: Current State and Future Prospects.pdf", "data": "surgery"},
      {"link": "https://arxiv.org/pdf/2402.19051.pdf", "title": "Smart Grid Technologies: Challenges and Opportunities.pdf", "data": "grid"},
      {"link": "https://arxiv.org/pdf/2402.19052.pdf", "title": "The Role of Artificial Intelligence in Drug Discovery.pdf", "data": "pharma"},
      {"link": "https://arxiv.org/pdf/2402.19053.pdf", "title": "Bioinformatics: Advances in Computational Biology.pdf", "data": "bioinformatics"},
      {"link": "https://arxiv.org/pdf/2402.19054.pdf", "title": "Advancements in Energy Storage Technologies.pdf", "data": "energy"},
      {"link": "https://arxiv.org/pdf/2402.19055.pdf", "title": "Recent Developments in Autonomous Drones.pdf", "data": "drones"},
      {"link": "https://arxiv.org/pdf/2402.19056.pdf", "title": "Blockchain Applications in Supply Chain Management.pdf", "data": "supply chain"},
      {"link": "https://arxiv.org/pdf/2402.19057.pdf", "title": "Space Exploration: Technologies for Interplanetary Travel.pdf", "data": "space"},
      {"link": "https://arxiv.org/pdf/2402.19058.pdf", "title": "Advances in Genomic Sequencing Techniques.pdf", "data": "genomics"},
      {"link": "https://arxiv.org/pdf/2402.19059.pdf", "title": "NLP Techniques for Sentiment Analysis.pdf", "data": "sentiment"},
      {"link": "https://arxiv.org/pdf/2402.19060.pdf", "title": "Future of Quantum Communication Networks.pdf", "data": "quantum"},
      {"link": "https://arxiv.org/pdf/2402.19061.pdf", "title": "Artificial Intelligence in Financial Fraud Detection.pdf", "data": "fraud detection"},
      {"link": "https://arxiv.org/pdf/2402.19062.pdf", "title": "Advancements in Biometric Authentication Systems.pdf", "data": "biometrics"},
      {"link": "https://arxiv.org/pdf/2402.19063.pdf", "title": "Augmented Reality in Healthcare: Current Trends.pdf", "data": "healthcare"},
      {"link": "https://arxiv.org/pdf/2402.19064.pdf", "title": "Deep Learning Applications in Natural Language Processing.pdf", "data": "NLP"},
      {"link": "https://arxiv.org/pdf/2402.19065.pdf", "title": "The Future of Quantum Computing: Prospects and Challenges.pdf", "data": "quantum computing"},
      {"link": "https://arxiv.org/pdf/2402.19066.pdf", "title": "Advances in Agricultural Robotics.pdf", "data": "agricultural robotics"},
      {"link": "https://arxiv.org/pdf/2402.19067.pdf", "title": "Robotics in Education: Enhancing Learning Experiences.pdf", "data": "education"},
      {"link": "https://arxiv.org/pdf/2402.19068.pdf", "title": "Machine Learning for Healthcare Analytics.pdf", "data": "healthcare analytics"},
      {"link": "https://arxiv.org/pdf/2402.19069.pdf", "title": "Advances in Quantum Sensing Technologies.pdf", "data": "quantum sensing"},
      {"link": "https://arxiv.org/pdf/2402.19070.pdf", "title": "Cybersecurity in the Internet of Things.pdf", "data": "IoT cybersecurity"},
      {"link": "https://arxiv.org/pdf/2402.19071.pdf", "title": "Advancements in Human-Computer Interaction.pdf", "data": "HCI"},
      {"link": "https://arxiv.org/pdf/2402.19072.pdf", "title": "Artificial Intelligence in Autonomous Vehicles.pdf", "data": "autonomous vehicles"},
      {"link": "https://arxiv.org/pdf/2402.19073.pdf", "title": "Deep Learning for Natural Language Understanding.pdf", "data": "NLU"},
      {"link": "https://arxiv.org/pdf/2402.19074.pdf", "title": "Advancements in Quantum Error Correction.pdf", "data": "quantum error correction"},
      {"link": "https://arxiv.org/pdf/2402.19075.pdf", "title": "Future of Renewable Energy: Trends and Innovations.pdf", "data": "renewable energy"},
      {"link": "https://arxiv.org/pdf/2402.19076.pdf", "title": "Advancements in Brain-Computer Interface Technologies.pdf", "data": "BCI"},
      {"link": "https://arxiv.org/pdf/2402.19077.pdf", "title": "Challenges in Edge Computing: Security and Privacy.pdf", "data": "edge computing"},
      {"link": "https://arxiv.org/pdf/2402.19078.pdf", "title": "Machine Learning for Personalized Medicine.pdf", "data": "personalized medicine"},
      {"link": "https://arxiv.org/pdf/2402.19079.pdf", "title": "Quantum Machine Learning: Current Status and Future Directions.pdf", "data": "quantum ML"},
      {"link": "https://arxiv.org/pdf/2402.19080.pdf", "title": "Deep Learning in Financial Forecasting.pdf", "data": "financial forecasting"}
      // Add more entries if needed
    ];
    


      const result = await client.helpers.bulk({
        datasource: dataa,
        pipeline: "ent-search-generic-ingestion",
        onDocument: (doc) => ({ index: { _index: 'search-pdf-docs' }}),
      });
    console.log(result);
}

import { Client } from '@elastic/elasticsearch';
const client = new Client({
  node: 'https://860fff9adba14721ba4c7834874e2cbf.us-central1.gcp.cloud.es.io:443',
  auth: {
      apiKey: 'N19YNy1ZMEJKRnRuLVVZcmVJckk6ZGtMQmM4Y0JTdy1Ob2NnNW9LemUzUQ=='
  }
});

const resp = await client.info();

// console.log(resp);

parse()
// search("gandhi space")

