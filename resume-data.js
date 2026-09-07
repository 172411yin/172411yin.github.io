// 简历内容统一维护在本文件中。修改文字或增删条目后，刷新页面即可查看结果。
window.resumeData = {
    site: {
        title: "尹天乐 - 个人简历",
        language: "zh-CN",
        navOrder: ["overview", "education", "papers", "projects", "skills", "honors", "service"]
    },

    profile: {
        name: "尹天乐",
        englishName: "Tianle Yin",
        headline: "博士研究生 | 中山大学 | 航空航天学院",
        photo: "photo.jpg",
        contacts: [
            { type: "phone", label: "18905616670", href: "tel:18905616670" },
            { type: "email", label: "18905616670@163.com", href: "mailto:18905616670@163.com" },
            { type: "location", label: "安徽淮北 | 2001 年 8 月生" },
            { type: "Google Scholar", label: "谷歌学术", href: "https://scholar.google.com.hk/citations?user=wUmhWDgAAAAJ&hl=zh-CN" }
        ]
    },

    sections: {
        overview: {
            enabled: true,
            navLabel: "概述",
            title: "研究概述",
            paragraphs: [
"Yin Tianle was born in August 2001 in Huaibei, Anhui Province, China. He received his B.E. degree in Automation from Anhui Polytechnic University in June 2023 (2019.09–2023.06), and his M.E. degree in Control Science and Engineering from Jiangnan University in June 2026 (2023.09–2026.06), where he was recognized as an Outstanding Master’s Graduate. He is currently pursuing a Ph.D. degree in Aeronautical and Astronautical Science and Technology at Sun Yat-sen University (2026.09–present).",
"His research focuses on the optimization of hierarchical management and control for mega-constellations, and intelligent spacecraft control, among other areas. He has published several high-quality papers in leading journals, including IEEE Transactions on Aerospace and Electronic Systems (IEEE TAES). He is an IEEE Student Member and serves as a reviewer for several SCI/EI-indexed journals. His honors include the National Scholarship and an Outstanding Paper Award at the Jiangsu Graduate Academic Innovation Forum, among others.",
                "尹天乐，2001 年 8 月出生，安徽淮北人。本科毕业于安徽工程大学自动化专业（2019.09-2023.06）。硕士毕业于江南大学控制科学与工程专业硕士研究生（2023.09-2026.06），并获得江南大学优秀硕士毕业生。目前正在中山大学攻读航空宇航科学与技术专业博士研究生（2026.09-至今）。",
                "研究方向聚焦于巨型星座层次化管控优化、航天器智能化控制等方面，在 IEEE TAES 等顶级期刊发表多篇高水平论文。担任 IEEE Student Member、多个 SCI/EI 期刊审稿人。荣获国家奖学金、江苏省研究生学术创新论坛最佳论文优秀奖等荣誉。"
            ]
        },

        education: {
            enabled: true,
            navLabel: "教育经历",
            title: "教育经历",
            items: [
                {
                    degree: "博士研究生",
                    degreeEnglish: "Ph.D. Student",
                    date: "2026.09 - 至今",
                    institution: "中山大学",
                    institutionEnglish: "Sun Yat-sen University",
                    institutionUrl: "https://www.sysu.edu.cn/",
                    major: "航空宇航科学与技术",
                    majorEnglish: "Aeronautical and Astronautical Science and Technology",
                    advisor: "导师：王继河、张承玺"
                },
                {
                    degree: "硕士研究生",
                    degreeEnglish: "Master's Student",
                    date: "2023.09 - 2026.06",
                    institution: "江南大学",
                    institutionEnglish: "Jiangnan University",
                    institutionUrl: "https://www.jiangnan.edu.cn/",
                    major: "控制科学与工程",
                    majorEnglish: "Control Science and Engineering",
                    advisor: "导师：张承玺"
                },
                {
                    degree: "学士",
                    degreeEnglish: "Bachelor's Degree",
                    date: "2019.09 - 2023.06",
                    institution: "安徽工程大学",
                    institutionEnglish: "Anhui Polytechnic University",
                    institutionUrl: "https://www.ahpu.edu.cn/",
                    major: "自动化",
                    majorEnglish: "Automation"
                }
            ]
        },

        papers: {
            enabled: true,
            navLabel: "学术论文",
            title: "学术论文",
            note: "*表示通讯作者",
            highlightAuthors: ["Tianle Yin", "尹天乐"],
            sourceUrl: "https://scholar.google.com.hk/citations?user=wUmhWDgAAAAJ&hl=zh-CN",
            items: [
                {
                    title: "Configuration Maintenance in Multi-Satellite Orbits via Co-Phase and Control Optimization",
                    authors: "Tianle Yin, Chengxi Zhang, Jihe Wang, Jin Wu, Renuganth Varatharajoo, Dezhi Xu, Bin Jiang",
                    venue: "IEEE Transactions on Aerospace and Electronic Systems",
                    details: "[发表，SCI 检索，JCR-Q1, IF=5.7]",
                },
                {
                    title: "Clustering Strategy for Megaconstellation with Synergistic Energy and Size Considerations",
                    authors: "Chengxi Zhang*, Tianle Yin*, Wenshuo Wang, Jin Wu, Jihe Wang, Yuhua Qi, Wei He",
                    venue: "IEEE Transactions on Aerospace and Electronic Systems",
                    details: "[发表，SCI 检索，JCR-Q1, IF=5.7]",
                },
                {
                    title: "Optimization-Driven Hierarchical Coordination Enables Sustainable Megaconstellation Operations",
                    authors: "Chengxi Zhang, Tianle Yin, Jihe Wang, Dezhi Xu, Zehui Mao and Bin Jiang",
                    venue: "IEEE Transactions on Aerospace and Electronic Systems",
                    details: " [发表，JCR-Q1, IF=5.7]"
                },
                {
                    title: "Maintenance of Co-orbital Satellite Configurations with Minimal Control Inputs",
                    authors: "Zheng Qiao, Tianle Yin*, Xiangwei Bu, Zhijian He, Jintao Cheng, Quan Li, Chengxi Zhang",
                    venue: "IEEE Journal on Miniaturization for Air and Space Systems",
                    details: " [发表，EI/ESCI 检索，通讯作者]"
                },
                {
                    title: "Optimization of Fuel Station Placement for On-Orbit Refueling of SSO Satellite Clusters",
                    authors: "Tianle Yin, Xiaoyu Zhu, Zhijian He, Jihe Wang, Kaixiang Yang, Chengxi Zhang",
                    venue: "ICGNC2026",
                    details: "广西桂林 [发表，oral，EI 会议]"
                },

                {
                    title: "Data-Driven RUL Prediction of CMAPSS Jet Engines: A Swarm Intelligence-Optimized Transformer Approach",
                    authors: "Hao Wu, Tianle Yin*",
                    venue: "Aerospace Engineering Communications",
                    details: "[通讯作者]"
                },
                {
                    title: "Managing Mega-Constellations: A Starlink-Informed Review",
                    authors: "Tianle Yin, Zhijian He, Jin Wu, Renuganth Varatharajoo, Dezhi Xu, Chengxi Zhang",
                    venue: "Symmetry",
                    details: "[发表，综述-邀请稿，SCI 检索，JCR-Q2，IF=2.2]"
                },
                {
                    title: "Uncertainty-Handling Balance of a Unicycle Robot with Low-Power Flywheel",
                    authors: "Weijie Xi, Tianle Yin, Zhe Liu, Jin Wu, Dezhi Xu, and Chengxi Zhang",
                    venue: "IEICE Transactions on Fundamentals of Electronics, Communications and Computer Sciences",
                    details: "[发表，SCI 检索，JCR-Q4，IF=0.4]"
                },
                {
                    title: "Resilient Attitude Control under Sensor-Actuator Faults via Varying-Self-Learning Observers",
                    authors: "Chengxi Zhang, Ruiqiu Lu, Tianle Yin, Zhijian He, Lining Tan, Bing Huang, Dezhi Xu",
                    venue: "Aerospace Systems",
                    details: "[发表，EI 检索]"
                },
                {
                    title: "Self-Learning Control to Attitude Stabilization with Integral Event-Triggered Mechanism",
                    authors: "Nu Yang, Tianle Yin, Zhijian He, Quan Li, Ming-Zhe Dai, and Chengxi Zhang",
                    venue: "Symmetry",
                    details: "[发表，SCI 检索，JCR-Q2，IF=2.2]"
                },
                {
                    title: "Fault-Tolerant Control of Industrial Pneumatic Valves using Self-Learning Observers",
                    authors: "Ruiqiu Lu, Tianle Yin, Lianren Zhang, Caisheng Wei, Wei Wang, Chengxi Zhang",
                    venue: "The 40th Youth Academic Annual Conference of Chinese Association of Automation (YAC2025)",
                    details: "河南郑州 [发表，EI 会议]"
                },
                {
                    title: "基于协同相位与控制优化的多卫星轨道构型维持",
                    authors: "尹天乐，李权，吴荩，张连仁，许德智，张承玺",
                    venue: "2025 年江苏省研究生学术创新论坛",
                    details: "[录用，最佳论文优秀奖]"
                }

            ]
        },

        projects: {
            enabled: true,
            navLabel: "科研项目",
            title: "科研项目",
            items: [
                {
                    source: "国家重点研发项目子课题",
                    name: "巨型星座自主导航与轨道控制技术",
                    role: "参与",
                    image: {
                        src: "assets/projects/megaconstellation-control.png",
                        label: "查看项目图片"
                    },
                    roleLabel: "承担工作内容：",
                    bullets: [
                        {
                            label: "巨型星座分簇及轨道控制方案设计",
                            text: "研究并构建巨型星座自组织分簇机制及构型维持策略，优化星座内分簇场景，提高星座管理效率，并采用相对构型维持，保障星座在长期运行中的构型稳定"
                        },
                        {
                            label: "仿真验证及报告撰写",
                            text: "在项目期间完成相关仿真验证、结果分析、相关 PPT 制作及技术报告撰写"
                        },
                        {
                            label: "相关软件设计",
                            text: "通过 Matlab 开发自主导航与轨道控制仿真验证平台"
                        },
                        {
                            label: "相关成果",
                            text: "研究成果多篇发表/投稿至 IEEE TAES、SPJ、IEEE JMASS 等期刊"
                        }
                    ]
                },
                {
                    source: "国家自然科学基金面上项目",
                    name: "基于自学习策略的轻量化航天器姿态容错控制研究",
                    role: "参与",
                    image: {
                        src: "assets/projects/balance-cube.jpg",
                        label: "查看项目图片"
                    },
                    roleLabel: "承担工作内容：",
                    bullets: [
                        {
                            label: "文献调研",
                            text: "对航天器姿态容错控制及自学习策略文献进行系统调研，整理并总结相关领域研究成果"
                        },
                        {
                            label: "仿真验证",
                            text: "在 MATLAB/Simulink 中建立航天器动力学模型，完成控制算法仿真、参数优化及基线方法对比"
                        },
                        {
                            label: "实验验证",
                            text: "在立方体机器人中开展自学习策略验证，结果显示相较于 PID 控制/自适应控制，精度提升不低于 50%"
                        },
                        {
                            label: "相关成果",
                            text: "研究成果多篇发表/投稿至 ASST、YAC2025 等期刊/会议"
                        }
                    ]
                }
            ]
        },

     
        honors: {
            enabled: true,
            navLabel: "获奖情况",
            title: "获奖情况",
            items: [
                "国家奖学金",
                "江南大学一等学业奖学金",
                "江南大学优秀研究生",
                "江南大学优秀毕业研究生",
                "江苏省研究生智能感知与自主控制学术创新论坛 最佳论文优秀奖 (2025年)"
            ]
        },

        service: {
            enabled: true,
            navLabel: "学术兼职",
            title: "学术兼职",
            items: [
                { label: "学术会员", value: "IEEE Student Member；IEEE SMC Student Member" },
                { label: "会议审稿人", value: "IEEE YAC 2025 (EI)、IEEE FASTA 2025 (EI) 等" },
                { label: "期刊审稿人", value: "Frontiers in Mechanical Engineering、Frontiers in Aerospace Engineering、International Journal of Communication Systems、Scientific Reports、Astrodynamics 等" }
            ]
        }
    },

    footer: {
        owner: "尹天乐",
        affiliation: "中山大学",
        homepageLabel: "谷歌学术",
        homepageUrl: "https://scholar.google.com.hk/citations?user=wUmhWDgAAAAJ&hl=zh-CN"
    }
};
