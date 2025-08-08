// Import project images
import dataAnalyticsImg from "@/assets/data-analytics.jpg";
import computerVisionImg from "@/assets/computer-vision.jpg";
import machineLearningImg from "@/assets/machine-learning.jpg";
import nlpImg from "@/assets/nlp.jpg";
import researchImg from "@/assets/research.jpg";
import mlopsImg from "@/assets/mlops.jpg";
import { ProjectData } from "@/types/project";

export const projectData: ProjectData = {
  dataAnalytics: {
    title: "Data Analytics",
    description: "Interactive dashboards and business intelligence solutions using Microsoft Power BI for public health and security analytics.",
    projects: [
      {
        title: "Tuberculosis Analysis in Zimbabwe",
        description: "Designed an interactive Power BI dashboard to support public health decision-making by analyzing TB trends in Zimbabwe. Features regional benchmarking against Southern Africa and tracks progress toward SDG 3 goals.",
        image: dataAnalyticsImg,
        tags: ["Power BI", "Public Health", "SDG Tracking"],
        concepts: ["Exploratory Data Analysis", "Data Visualization", "Time Series Analysis", "Regional Benchmarking"],
        tools: ["Microsoft Power BI", "Excel", "WHO Data APIs"],
        githubUrl: "", // Add your GitHub URL here
        powerBiUrl: "https://app.powerbi.com/reportEmbed?reportId=1982aa7d-ed2f-4e89-8bc1-c62fec08aa1f&autoAuth=true&ctid=0a33589b-0036-4fe8-a829-3ed0926af886"
      },
      {
        title: "IKEA Card Skimming Detection Dashboard",
        description: "Comprehensive Power BI dashboard for monitoring payment terminal redeployment at IKEA Breda. Enables tracking of terminal movements, employee behavior analysis, and identification of security risk hotspots.",
        image: dataAnalyticsImg,
        tags: ["Power BI", "Security Analytics", "Retail"],
        concepts: ["Security Risk Analytics", "Operational Intelligence", "Employee Behavior Analysis", "Compliance Monitoring"],
        tools: ["Microsoft Power BI", "SQL Server", "Excel"],
        githubUrl: "", // Add your GitHub URL here
        powerBiUrl: "https://app.powerbi.com/reportEmbed?reportId=1da2683b-53cd-4774-9cd5-3328b7b6d393&autoAuth=true&ctid=0a33589b-0036-4fe8-a829-3ed0926af886"
      }
    ]
  },
  
  computerVision: {
    title: "Computer Vision",
    description: "Advanced image processing and AI solutions for real-world applications including occupancy detection and agricultural phenotyping.",
    projects: [
      {
        title: "Classroom Occupancy Detection with Explainable AI",
        description: "CNN-based image classification system to detect classroom occupancy with Grad-CAM explainability. Designed for university space optimization with privacy-first approach and real-time analytics.",
        image: computerVisionImg,
        tags: ["CNN", "Explainable AI", "Real-time Processing"],
        concepts: ["Convolutional Neural Networks", "Grad-CAM Explainability", "Image Classification", "Responsible AI"],
        tools: ["Python", "TensorFlow/Keras", "OpenCV", "Matplotlib"],
        githubUrl: "" // Add your GitHub URL here
      },
      {
        title: "Primary Root Detection Pipeline (NPEC)",
        description: "Full AI pipeline for automated detection, segmentation, and measurement of plant root structures. Integrates with robotics for automated lab tasks and supports agricultural phenotyping research.",
        image: computerVisionImg,
        tags: ["Image Segmentation", "Agricultural AI", "Robotics Integration"],
        concepts: ["Image Segmentation", "Skeletonization", "Feature Extraction", "Transfer Learning"],
        tools: ["Python", "TensorFlow/Keras", "OpenCV", "Stable-Baselines3"],
        githubUrl: "" // Add your GitHub URL here
      }
    ]
  },
  
  machineLearning: {
    title: "Machine Learning",
    description: "End-to-end ML solutions following CRISP-DM methodology for real-world prediction and classification tasks.",
    projects: [
      {
        title: "Accident Detection & Risk Analysis",
        description: "Full-stack driving risk prediction system using CRISP-DM methodology. Deep learning classifier for accident risk levels with SQL-based data pipeline and interactive Streamlit deployment.",
        image: machineLearningImg,
        tags: ["Deep Learning", "CRISP-DM", "Risk Prediction"],
        concepts: ["CRISP-DM Lifecycle", "Deep Learning Classification", "Feature Engineering", "Real-time Prediction"],
        tools: ["Python", "TensorFlow/Keras", "SQL", "Streamlit"],
        githubUrl: "" // Add your GitHub URL here
      }
    ]
  },
  
  nlp: {
    title: "Natural Language Processing",
    description: "Advanced text processing and multilingual AI solutions for emotion detection and content analysis.",
    projects: [
      {
        title: "Greek Emotion Detection with Translation",
        description: "End-to-end NLP pipeline for emotion detection in Greek YouTube videos. Combines Whisper speech recognition, multilingual translation, and transformer-based emotion classification with intensity scoring.",
        image: nlpImg,
        tags: ["Multilingual NLP", "Speech Recognition", "Emotion AI"],
        concepts: ["Speech-to-Text", "Machine Translation", "Emotion Classification", "Pipeline Engineering"],
        tools: ["Python", "HuggingFace Transformers", "Whisper", "OpenAI API"],
        githubUrl: "" // Add your GitHub URL here
      }
    ]
  },
  
  research: {
    title: "Scientific Research",
    description: "Mixed-methods research combining quantitative analysis and qualitative insights for business and technology studies.",
    projects: [
      {
        title: "Impact of Chatbots on SMEs",
        description: "Comprehensive mixed-methods study exploring chatbot effectiveness in Small and Medium Enterprises. Combined statistical analysis with thematic research to provide actionable business recommendations.",
        image: researchImg,
        tags: ["Mixed Methods", "Business Research", "Statistical Analysis"],
        concepts: ["Mixed-Methods Research", "Statistical Testing", "Thematic Analysis", "Stakeholder Mapping"],
        tools: ["Python", "SPSS", "Qualtrics", "Excel"],
        githubUrl: "" // Add your GitHub URL here
      }
    ]
  },
  
  mlops: {
    title: "MLOps & Deployment",
    description: "Production-ready ML systems with containerization, cloud deployment, and automated workflow orchestration.",
    projects: [
      {
        title: "ROALT: Root Analysis Toolkit Deployment",
        description: "End-to-end MLOps deployment of deep learning pipelines using Docker, Azure ML, and Airflow. Features FastAPI backend, Gradio UI, and full CI/CD integration for plant research applications.",
        image: mlopsImg,
        tags: ["Docker", "Azure ML", "CI/CD"],
        concepts: ["MLOps Lifecycle", "Container Orchestration", "Cloud Deployment", "Workflow Automation"],
        tools: ["Docker", "Azure ML Studio", "Apache Airflow", "FastAPI", "GitHub Actions"],
        githubUrl: "" // Add your GitHub URL here
      }
    ]
  }
};