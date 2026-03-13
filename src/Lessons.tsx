// Centralized lessons/sections data for the projector curriculum.

export const PROJECTOR_SECTIONS = [
  "Fundamentals",
  "Data Science",
  "Machine Learning",
  "Research",
  "Engineering",
];

export const PROJECTOR_TOPICS = {
  Fundamentals: [
    {
      topic: "Linear Algebra",
      subtopics: [
        "Vector Spaces",
        "Matrix Multiplication",
        "Orthogonality",
        "Linear Transformations",
        "Change Of Basis",
      ],
    },
    {
      topic: "Spectral Methods",
      subtopics: [
        "Eigenvalues",
        "Eigenvectors",
        "Singular Value Decomposition",
        "Principal Component Analysis",
        "Matrix Factorizations",
      ],
    },
    {
      topic: "Matrix Calculus",
      subtopics: [
        "Gradients",
        "Jacobians",
        "Hessians",
        "Chain Rule",
        "Vector Calculus Rules",
      ],
    },
    {
      topic: "Probability",
      subtopics: [
        "Random Variables",
        "Conditional Probability",
        "Bayes Rule",
        "Joint Distributions",
        "Core Distributions",
      ],
    },
    {
      topic: "Statistics",
      subtopics: [
        "Estimators",
        "Likelihood Methods",
        "Hypothesis Testing",
        "Confidence Intervals",
        "Bias Variance",
      ],
    },
    {
      topic: "Information Theory",
      subtopics: [
        "Entropy",
        "Cross Entropy",
        "KL Divergence",
        "Mutual Information",
        "Maximum Entropy",
      ],
    },
    {
      topic: "Numerical Computing",
      subtopics: [
        "Floating Point",
        "Numerical Stability",
        "Condition Numbers",
        "Vectorization",
        "Complexity Analysis",
        "Computation Graphs",
      ],
    },
    {
      topic: "Tools",
      subtopics: [
        "Python Core",
        "NumPy",
        "Pandas",
        "SQL",
        "Git",
      ],
    },
    {
      topic: "Data Foundations",
      subtopics: [
        "Data Cleaning",
        "Feature Preparation",
        "Train Test Splits",
        "Data Leakage",
        "Data Versioning",
      ],
    },
  ],

  "Data Science": [
    {
      topic: "Statistical Inference",
      subtopics: [
        "Estimation",
        "Hypothesis Testing",
        "Inference Metrics",
        "Multiple Testing",
      ],
    },
    {
      topic: "Experimental Design",
      subtopics: [
        "Randomized Experiments",
        "A/B Testing",
        "Confounding Control",
        "Sample Planning",
      ],
    },
    {
      topic: "Data Preparation",
      subtopics: [
        "Missing Data",
        "Outlier Handling",
        "Feature Scaling",
        "Categorical Encoding",
        "Data Splitting",
        "Feature Design",
      ],
    },
    {
      topic: "Baseline & Regression Models",
      subtopics: [
        "Baselines",
        "Linear Regression",
        "Logistic Regression",
        "Regularized Regression",
        "GLM Extensions",
      ],
    },
    {
      topic: "Probabilistic Models",
      subtopics: [
        "Naive Bayes",
        "Mixture Models",
        "Hidden Markov",
        "Bayesian Regression",
        "Calibration",
      ],
    },
    {
      topic: "Distance & Kernel Methods",
      subtopics: [
        "KNN Distance",
        "SVM Formulations",
        "Kernel Methods",
        "Margin Optimization",
      ],
    },
    {
      topic: "Tree-Based Models",
      subtopics: [
        "Decision Trees",
        "Split Criteria",
        "Tree Regularization",
        "Pruning",
      ],
    },
    {
      topic: "Ensemble Methods",
      subtopics: [
        "Bagging Forests",
        "Boosting Methods",
        "Ensemble Stacking",
        "Feature Subsampling",
      ],
    },
    {
      topic: "Unsupervised Learning",
      subtopics: [
        "Centroid Clustering",
        "Hierarchical Clustering",
        "Density Clustering",
        "Mixture Clustering",
        "Dimensionality Reduction",
      ],
    },
    {
      topic: "Model Tuning",
      subtopics: [
        "Validation Strategy",
        "Hyperparameter Search",
        "Tuning Tooling",
        "Stopping Criteria",
      ],
    },
    {
      topic: "Evaluation & Diagnostics",
      subtopics: [
        "Classification Metrics",
        "Ranking Metrics",
        "Regression Metrics",
        "Calibration Metrics",
        "Error Analysis",
        "Bias Variance",
      ],
    },
    {
      topic: "Data Pipelines & Production",
      subtopics: [
        "Pipeline Design",
        "Data Management",
        "Experiment Tracking",
        "Workflow Orchestration",
        "Transformation Workflows",
      ],
    },
  ],

  "Machine Learning": [
    {
      topic: "Learning Setup",
      subtopics: [
        "Learning Paradigms",
        "Transfer Learning",
        "Task Generalization",
        "Contrastive Learning",
      ],
    },
    {
      topic: "Generalization Theory",
      subtopics: [
        "Risk Minimization",
        "Regularization Theory",
        "Bias Variance",
        "Capacity Theory",
        "Distribution Shift",
      ],
    },
    {
      topic: "Perceptron",
      subtopics: [
        "Threshold Activations",
        "Logic Gates",
        "Linear Separability",
        "Perceptron Training",
      ],
    },
    {
      topic: "Neural Network Basics",
      subtopics: [
        "Network Architecture",
        "Activation Functions",
        "Backpropagation",
        "Autodiff",
        "Initialization",
        "Normalization",
        "Layer Regularization",
      ],
    },
    {
      topic: "Loss Functions",
      subtopics: [
        "Regression Losses",
        "Classification Losses",
        "Divergence Losses",
        "Metric Losses",
        "Advanced Losses",
      ],
    },
    {
      topic: "Optimization",
      subtopics: [
        "Gradient Methods",
        "Adaptive Optimizers",
        "Momentum Methods",
        "Specialized Optimizers",
        "Learning Schedules",
        "Gradient Controls",
        "Convergence Analysis",
      ],
    },
    {
      topic: "Convolutional Networks",
      subtopics: [
        "Convolution Mechanics",
        "Feature Extraction",
        "Pooling Layers",
        "Connectivity Patterns",
        "Canonical CNNs",
        "Efficient CNNs",
      ],
    },
    {
      topic: "Sequence Modeling",
      subtopics: [
        "Recurrent Networks",
        "Temporal Credit",
        "Gradient Stability",
        "Seq2Seq Models",
        "Training Heuristics",
        "Decoding Strategies",
      ],
    },
    {
      topic: "Attention & Transformers",
      subtopics: [
        "Attention Variants",
        "Attention Mechanics",
        "Masking Positioning",
        "Block Architecture",
        "Transformer Families",
        "Efficient Attention",
      ],
    },
    {
      topic: "Generative Modeling",
      subtopics: [
        "Autoencoders",
        "Latent Training",
        "GAN Models",
        "Diffusion Models",
        "Flow Models",
        "Autoregressive Models",
      ],
    },
    {
      topic: "Embeddings",
      subtopics: [
        "Static Embeddings",
        "Contextual Embeddings",
        "Token Embeddings",
        "Similarity Search",
      ],
    },
    {
      topic: "Graph Neural Networks",
      subtopics: [
        "Graph Representation",
        "Message Passing",
        "GNN Architectures",
        "Graph Tasks",
      ],
    },
    {
      topic: "Multimodal & Vision-Language",
      subtopics: [
        "VLM Backbones",
        "Fusion Methods",
        "Crossmodal Tasks",
        "Reference Models",
      ],
    },
    {
      topic: "Training At Scale",
      subtopics: [
        "Finetuning Methods",
        "Prompt Tuning",
        "Preference Optimization",
        "Scaling Laws",
        "Parallel Training",
        "Efficiency Techniques",
      ],
    },
    {
      topic: "Reinforcement Learning",
      subtopics: [
        "MDP Foundations",
        "Dynamic Programming",
        "Value Methods",
        "Policy Gradients",
        "Actor Critic",
        "Exploration Design",
        "Model Based",
      ],
    },
    {
      topic: "State Space Models",
      subtopics: [
        "LTI Foundations",
        "Structured SSMs",
        "Selective SSMs",
        "Sequence Scans",
        "SSM Systems",
      ],
    },
    {
      topic: "ML Frameworks & Tools",
      subtopics: [
        "PyTorch Stack",
        "TensorFlow JAX",
        "HuggingFace Stack",
        "Training Tooling",
        "Export Tooling",
        "Hardware Runtimes",
      ],
    },
  ],

  Research: [
    {
      topic: "Mechanistic Interpretability",
      subtopics: [
        "Circuit Analysis",
        "Feature Superposition",
        "Sparse Autoencoders",
        "Head Analysis",
        "Lens Methods",
        "Representation Probing",
      ],
    },
    {
      topic: "Advanced Explainability",
      subtopics: [
        "Gradient Attribution",
        "Shapley Methods",
        "Counterfactual Explanations",
        "Surrogate Models",
        "Vision Attribution",
      ],
    },
    {
      topic: "AI Safety & Alignment",
      subtopics: [
        "Alignment Taxonomy",
        "Reward Failures",
        "Scalable Oversight",
        "Behavioral Guarantees",
        "Safety Interpretability",
      ],
    },
    {
      topic: "Robustness & Safety",
      subtopics: [
        "Adversarial Attacks",
        "Adversarial Defenses",
        "OOD Detection",
        "Robustness Evaluation",
        "Prompt Safety",
      ],
    },
    {
      topic: "Causal Machine Learning",
      subtopics: [
        "Causal Graphs",
        "Causal Identification",
        "Structural Causality",
        "Treatment Effects",
        "Causal Discovery",
        "Counterfactuals",
      ],
    },
    {
      topic: "Probabilistic & Bayesian Modeling",
      subtopics: [
        "Bayesian Foundations",
        "Inference Methods",
        "Posterior Prediction",
        "Uncertainty Quantification",
        "Conformal Methods",
        "Gaussian Processes",
      ],
    },
    {
      topic: "Neurosymbolic AI",
      subtopics: [
        "Symbolic Programming",
        "Knowledge Graphs",
        "Differentiable Reasoning",
        "Program Synthesis",
        "Neurosymbolic Methods",
      ],
    },
    {
      topic: "Graph Machine Learning",
      subtopics: [
        "Graph Construction",
        "Graph Embeddings",
        "Graph Architectures",
        "Graph Prediction",
        "Heterogeneous Graphs",
      ],
    },
    {
      topic: "Time Series Learning",
      subtopics: [
        "Temporal Structure",
        "Classical Forecasting",
        "Deep Forecasting",
        "Temporal Validation",
        "Series Anomalies",
      ],
    },
    {
      topic: "Recommender Systems",
      subtopics: [
        "Collaborative Filtering",
        "Latent Factors",
        "Neural Recommenders",
        "Retrieval Ranking",
        "Recommendation Tradeoffs",
      ],
    },
    {
      topic: "LLM Engineering & Agents",
      subtopics: [
        "Prompt Methods",
        "RAG Pipelines",
        "Vector Search",
        "Tool Calling",
        "Agent Architectures",
        "Memory Management",
        "LLM Evaluation",
      ],
    },
    {
      topic: "Computer Vision",
      subtopics: [
        "Detection Models",
        "Segmentation Models",
        "3D Vision",
        "Video Understanding",
        "Foundation Vision",
      ],
    },
    {
      topic: "Natural Language Processing",
      subtopics: [
        "Tokenization Methods",
        "Structured NLP",
        "Generation Tasks",
        "Summarization QA",
        "Inference Tasks",
        "NLP Metrics",
      ],
    },
    {
      topic: "Privacy & Secure Learning",
      subtopics: [
        "Federated Learning",
        "Secure Aggregation",
        "Differential Privacy",
        "Privacy Attacks",
        "Governance Controls",
      ],
    },
    {
      topic: "Emerging Areas",
      subtopics: [
        "World Models",
        "Inference Scaling",
        "MoE Routing",
        "Embodied Learning",
        "AI Science",
      ],
    },
  ],

  Engineering: [
    {
      topic: "Inference Efficiency",
      subtopics: [
        "KV Caching",
        "Attention Kernels",
        "Kernel Optimization",
        "Prompt Caching",
        "Paged Attention",
        "Decode Optimization",
      ],
    },
    {
      topic: "Batching & Throughput",
      subtopics: [
        "Batching Modes",
        "Prefill Decode",
        "Request Scheduling",
        "Latency Metrics",
        "Sequence Packing",
      ],
    },
    {
      topic: "Speculative & Parallel Decoding",
      subtopics: [
        "Speculative Decoding",
        "Draft Verification",
        "Rejection Sampling",
        "Parallel Decoding",
        "Consistency Decoding",
      ],
    },
    {
      topic: "Quantization & Compression",
      subtopics: [
        "Numeric Precision",
        "Posttraining Quantization",
        "Quantization Toolchains",
        "Quantization Calibration",
        "Distillation",
        "Model Pruning",
      ],
    },
    {
      topic: "Distributed Inference & Parallelism",
      subtopics: [
        "Parallel Modes",
        "Tensor Decomposition",
        "Distributed Collectives",
        "Network Fabrics",
        "Multinode Inference",
      ],
    },
    {
      topic: "Hardware & Low-Level Compute",
      subtopics: [
        "Memory Hierarchy",
        "Roofline Analysis",
        "CUDA Kernels",
        "Tensor Cores",
        "Operator Fusion",
        "Accelerator Landscape",
      ],
    },
    {
      topic: "Serving Infrastructure",
      subtopics: [
        "Inference Servers",
        "Serving Frameworks",
        "Autoscaling",
        "Model Operations",
        "API Protocols",
        "Latency Controls",
      ],
    },
    {
      topic: "Training Systems",
      subtopics: [
        "Distributed Training",
        "ZeRO Offloading",
        "Memory Optimization",
        "Mixed Precision",
        "Training Frameworks",
        "Fault Tolerance",
      ],
    },
    {
      topic: "Observability & Reliability",
      subtopics: [
        "Profiling Tooling",
        "Utilization Monitoring",
        "Stability Monitoring",
        "Memory Diagnostics",
        "Recovery Workflows",
        "Deployment Reliability",
        "Drift Monitoring",
      ],
    },
    {
      topic: "Cost & Efficiency Tradeoffs",
      subtopics: [
        "Cost Modeling",
        "Pricing Strategy",
        "Cost Estimation",
        "Caching Economics",
        "Hardware Tradeoffs",
        "Performance Optimization",
        "Cluster Sizing",
      ],
    },
  ],
};
