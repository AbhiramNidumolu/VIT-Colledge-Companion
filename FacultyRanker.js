// Faculty data array
const facultyProfiles = [
     {
          "name": "Dr. Jayendra Kumar",
          "specialization": ["Microstrip Antennas", "Dielectric Resonators", "RF & Microwaves"],
          "attendance": 3.87,
          "attendance_count": 15,
          "correction": 4.08,
          "correction_count": 13,
          "teaching": 4.20,
          "teaching_count": 15
     },
     {
          "name": "Dr. Joseph Alugula",
          "specialization": ["Political Theory", "International Relations (Indo-Israel Relations)", "Public Policy", "Ageing", "Social Security"],
          "attendance": 4.57,
          "attendance_count": 7,
          "correction": 4.00,
          "correction_count": 7,
          "teaching": 4.14,
          "teaching_count": 7
     },
     {
          "name": "Dr. K.A. Asraar Ahmed",
          "specialization": ["Business Analytics", "Marketing Analytics", "Marketing Research", "Data Analytics & Visualization", "Data Science using R"],
          "attendance": 4.73,
          "attendance_count": 11,
          "correction": 4.55,
          "correction_count": 11,
          "teaching": 4.00,
          "teaching_count": 11
     },
     {
          "name": "Dr. K Senthil",
          "specialization": ["Metal Oxide Nanomaterials", "Metal Oxide-rGO Nanocomposites", "Polymer Nanocomposites", "Inorganic Phosphor Materials", "Photocatalysts", "Antibacterial Activities", "Supercapacitors", "Batteries", "Gas Sensors"],
          "attendance": 5.05,
          "attendance_count": 21,
          "correction": 5.05,
          "correction_count": 20,
          "teaching": 4.90,
          "teaching_count": 20
     },
     {
          "name": "Dr. Kalapraveen Bagadi",
          "specialization": ["Artificial Intelligence", "Machine Learning", "Soft Computing Techniques", "Wireless Communication", "UAV Communications"],
          "attendance": 3.13,
          "attendance_count": 8,
          "correction": 1.80,
          "correction_count": 5,
          "teaching": 2.38,
          "teaching_count": 8
     },
     {
          "name": "Dr. Kamalesh Kumar",
          "specialization": ["Numerical Analysis", "Ordinary and partial differential equations", "Numerical Treatment of Singular Perturbation Problems", "Singularly Perturbed Differential-Difference equations"],
          "attendance": 4.14,
          "attendance_count": 42,
          "correction": 3.76,
          "correction_count": 42,
          "teaching": 4.00,
          "teaching_count": 43
     },
     {
          "name": "Dr. Kankanala Srinivas",
          "specialization": ["Image Processing", "Computer Vision", "Soft Computing", "Compressive Sensing", "DOA estimation"],
          "attendance": 4.43,
          "attendance_count": 14,
          "correction": 3.86,
          "correction_count": 14,
          "teaching": 4.57,
          "teaching_count": 14
     },
     {
          "name": "Dr. Kareemulla Shaik",
          "specialization": ["Wireless Networks and Security", "Cyber Security", "Machine Learning", "Deep Learning", "Internet of Things (IoT)"],
          "attendance": 4.18,
          "attendance_count": 11,
          "correction": 4.64,
          "correction_count": 11,
          "teaching": 4.27,
          "teaching_count": 11
     },
     {
          "name": "Dr. Karishma Bisht",
          "specialization": ["Psychoanalysis", "Indian Aesthetics", "World Literature", "Literary Theory", "Disability Studies"],
          "attendance": 3.68,
          "attendance_count": 38,
          "correction": 3.68,
          "correction_count": 38,
          "teaching": 4.57,
          "teaching_count": 37
     },
     {
          "name": "Dr. Karthika Natarajan",
          "specialization": ["Information Retrieval", "Big Data", "Data Science", "Machine Learning", "Deep Learning"],
          "attendance": 2.82,
          "attendance_count": 49,
          "correction": 1.55,
          "correction_count": 49,
          "teaching": 1.76,
          "teaching_count": 49
     },
     {
          "name": "Dr. Kashif Beg",
          "specialization": ["Accounting", "Finance", "Microfinance", "Interest Free Finance", "Investment Management", "Mutual Funds"],
          "attendance": 2.88,
          "attendance_count": 16,
          "correction": 3.13,
          "correction_count": 15,
          "teaching": 2.06,
          "teaching_count": 16
     },
     {
          "name": "Dr. Kaushik N. Bhuyan",
          "specialization": ["Travel Writing", "Ethnography", "Management Communication", "Soft Skills", "ESP"],
          "attendance": 3.35,
          "attendance_count": 26,
          "correction": 3.72,
          "correction_count": 25,
          "teaching": 3.28,
          "teaching_count": 25
     },
     {
          "name": "Dr. Khairnar Vikas Vishnu",
          "specialization": ["RF and Microwave Engineering", "Design and Development of Reconfigurable Antennas", "Metamaterial Inspired Antennas", "mmWave Antenna", "Microwave Circuit Design"],
          "attendance": 4.26,
          "attendance_count": 43,
          "correction": 4.26,
          "correction_count": 43,
          "teaching": 4.49,
          "teaching_count": 43
     },
     {
          "name": "Dr. Khasim Syed",
          "specialization": ["Network Security & Cryptography", "Data & Web Mining", "Software Engineering", "Software Quality Assurance", "Human Computer Interaction"],
          "attendance": 2.80,
          "attendance_count": 5,
          "correction": 4.20,
          "correction_count": 5,
          "teaching": 4.20,
          "teaching_count": 5
     },
     {
          "name": "Dr. Kingshuk Sarkar",
          "specialization": ["Theoretical and Computational Condensed Matter Physics", "Spintronics and thermoelectric study in Graphene and other mesoscopic systems", "Ginzburg-Landau theory of Superconductivity and Spinor Condensates", "Quantum Computing", "Quantum Machine Learning", "Quantum Finance"],
          "attendance": 2.94,
          "attendance_count": 18,
          "correction": 3.00,
          "correction_count": 19,
          "teaching": 2.11,
          "teaching_count": 18
     },
     {
          "name": "Dr. Aastha Madonna Sathe",
          "specialization": ["Computational Statistics", "Stable Distributions", "Time Series Analysis", "Forecasting", "Artificial Neural Networks"],
          "attendance": 3.71,
          "attendance_count": 41,
          "correction": 3.05,
          "correction_count": 41,
          "teaching": 3.73,
          "teaching_count": 40
     },
     {
          "name": "Dr. Abdul Kayom Md Khairuzzaman",
          "specialization": ["Image Processing", "Soft Computing", "Swarm Intelligence"],
          "attendance": 4.41,
          "attendance_count": 70,
          "correction": 4.41,
          "correction_count": 70,
          "teaching": 4.19,
          "teaching_count": 70
     },
     {
          "name": "Dr. Abhishekh",
          "specialization": ["Fuzzy optimization", "Time series forecasting", "Intuitionistic fuzzy sets", "Soft computing techniques", "Moving average forecasting model"],
          "attendance": 2.04,
          "attendance_count": 54,
          "correction": 1.71,
          "correction_count": 51,
          "teaching": 2.19,
          "teaching_count": 54
     },
     {
          "name": "Dr. Aby Abraham",
          "specialization": ["Cultural Studies", "Visual Culture", "Photography", "Popular Culture", "Literary Criticism"],
          "attendance": 3.89,
          "attendance_count": 65,
          "correction": 3.83,
          "correction_count": 64,
          "teaching": 4.54,
          "teaching_count": 68
     },
     {
          "name": "Dr. Agam Das Goswami",
          "specialization": ["Multi-Point Stochastic Simulation", "Signal Processing", "Image Processing & Machine Learning"],
          "attendance": 4.30,
          "attendance_count": 27,
          "correction": 4.46,
          "correction_count": 28,
          "teaching": 4.33,
          "teaching_count": 27
     },
     {
          "name": "Dr. Ajay Dagar",
          "specialization": ["Spatial Audio Processing", "Personal Audio Reproduction", "Audio, Speech & Language Processing", "Multi-modal Information Retrieval", "Audio-Visual Signal Processing in Augmented & Virtual Reality"],
          "attendance": 4.31,
          "attendance_count": 32,
          "correction": 3.12,
          "correction_count": 33,
          "teaching": 4.03,
          "teaching_count": 33
     },
     {
          "name": "Dr. Alka Munjal",
          "specialization": ["Summability Theory", "Approximation Theory", "Real Analysis", "Functional Analysis", "Reliability Analysis"],
          "attendance": 4.34,
          "attendance_count": 38,
          "correction": 4.18,
          "correction_count": 39,
          "teaching": 4.13,
          "teaching_count": 38
     },
     {
          "name": "Dr. Amar Ramesh Wayal",
          "specialization": ["North American Native Studies", "First Nations Cultural Politics", "American Indian Rhetoric", "Comparative Literature", "Critical Discourse Analysis"],
          "attendance": 3.68,
          "attendance_count": 50,
          "correction": 3.24,
          "correction_count": 50,
          "teaching": 3.61,
          "teaching_count": 51
     },
     {
          "name": "Dr. Ambuj Sharma",
          "specialization": ["Computational Mechanics", "Finite Element Analysis", "Structural Health Monitoring"],
          "attendance": 4.27,
          "attendance_count": 11,
          "correction": 4.10,
          "correction_count": 10,
          "teaching": 4.08,
          "teaching_count": 12
     },
     {
          "name": "Dr. Ameet Chavan",
          "specialization": ["Ultra Low Power Design", "Radiation Hardening", "Energy Harvesting", "Industry Automation IOT", "Innovation and Entrepreneurship"],
          "attendance": 4.44,
          "attendance_count": 9,
          "correction": 4.44,
          "correction_count": 9,
          "teaching": 4.60,
          "teaching_count": 10
     },
     {
          "name": "Dr. Anamika Lata",
          "specialization": ["Transducer Design", "Instrumentation System Design", "Smart Sensing System", "MEMS", "Artificial neural network and Machine learning", "Sensor Interface Electronics", "Sensor Systems", "Biomedical Instrumentation"],
          "attendance": 4.28,
          "attendance_count": 18,
          "correction": 4.17,
          "correction_count": 18,
          "teaching": 4.28,
          "teaching_count": 18
     },
     {
          "name": "Dr. Ananthu S Hari",
          "specialization": ["Geographical Indications Law", "Traditional Knowledge and Biodiversity Protection Law", "Comparative Copyright Law", "IP Strategies and Management", "International Trade Law", "International Environmental Law"],
          "attendance": 3.90,
          "attendance_count": 10,
          "correction": 4.10,
          "correction_count": 10,
          "teaching": 4.30,
          "teaching_count": 10
     },
     {
          "name": "Dr. Anil Vithalrao Turukmane",
          "specialization": ["Network Security", "Cyber Security", "Python Programming", "Machine Learning", "AI", "Database Management Systems", "IOT"],
          "attendance": 3.40,
          "attendance_count": 15,
          "correction": 4.24,
          "correction_count": 17,
          "teaching": 3.27,
          "teaching_count": 15
     },
     {
          "name": "Dr. Anil Negi",
          "specialization": ["Geomechanics", "Elastodynamics", "Piezoelectricity", "Fracture Propagation", "Solid Mechanics"],
          "attendance": 1.61,
          "attendance_count": 96,
          "correction": 1.47,
          "correction_count": 96,
          "teaching": 1.61,
          "teaching_count": 94
     },
     {
          "name": "Dr. Ann Mary George",
          "specialization": ["Film Studies", "Malayalam Cinema", "Star Studies", "Visual Culture", "Popular Culture", "Ecofeminism"],
          "attendance": 3.48,
          "attendance_count": 42,
          "correction": 3.70,
          "correction_count": 43,
          "teaching": 4.36,
          "teaching_count": 42
     },
     {
          "name": "Dr. Anoop Kumar Mishra",
          "specialization": ["Bidirectional relaying system", "Non-orthogonal multiple access cooperative network", "Molecular communication networks"],
          "attendance": 4.66,
          "attendance_count": 41,
          "correction": 4.81,
          "correction_count": 42,
          "teaching": 4.57,
          "teaching_count": 42
     },
     {
          "name": "Dr. Santanu Nandi",
          "specialization": ["Dynamical Systems", "Complex Analysis", "Holomorphic Dynamics", "Fractal Theory", "Topology"],
          "attendance": 1.78,
          "attendance_count": 27,
          "correction": 1.38,
          "correction_count": 26,
          "teaching": 1.41,
          "teaching_count": 27
     },
     {
          "name": "Dr. Siva Tejaswi Jonna",
          "Department": "School of Computer Science and Engineering",
          "attendance": 3.52,
          "attendance_count": 27,
          "correction": 4.00,
          "correction_count": 26,
          "teaching": 4.50,
          "teaching_count": 27
     },
     {
          "name": "Dr. Anubendu Adhikary",
          "specializationAreas": [
               "Small molecule activation",
               "Homogeneous catalysis",
               "Energy transportation and conversion",
               "Reductive functionalization",
               "Reaction kinetics and mechanism"
          ],
          "ratings": {
               "attendance": {
                    "score": 3.92,
                    "totalReviews": 37
               },
               "correction": {
                    "score": 3.80,
                    "totalReviews": 35
               },
               "teaching": {
                    "score": 3.92,
                    "totalReviews": 38
               }
          }
     },
     {
          "name": "Dr. Anupama A. P.",
          "specializationAreas": [
               "Film Studies",
               "Spectatorship Studies",
               "Semiotics",
               "Space studies",
               "Psychoanalysis"
          ],
          "ratings": {
               "attendance": {
                    "score": 3.14,
                    "totalReviews": 35
               },
               "correction": {
                    "score": 2.83,
                    "totalReviews": 36
               },
               "teaching": {
                    "score": 3.39,
                    "totalReviews": 36
               }
          }
     },
     {
          "name": "Dr.Anupriya Elumalai",
          "specializationAreas": [
               "Data Mining",
               "Machine Learning",
               "Information Retrieval"
          ],
          "ratings": {
               "attendance": {
                    "score": 2.17,
                    "totalReviews": 12
               },
               "correction": {
                    "score": 3.00,
                    "totalReviews": 12
               },
               "teaching": {
                    "score": 5.82,
                    "totalReviews": 11
               }
          }
     },
     {
          "name": "Dr. Anurag De",
          "specializationAreas": [
               "Activity recognition for ambient intelligence",
               "Human fall detection",
               "Cyber-physical Systems",
               "Software Engineering",
               "Microprocessors"
          ],
          "ratings": {
               "attendance": {
                    "score": 3.38,
                    "totalReviews": 8
               },
               "correction": {
                    "score": 3.80,
                    "totalReviews": 10
               },
               "teaching": {
                    "score": 3.80,
                    "totalReviews": 10
               }
          }
     },
     {
          "name": "Dr. Aravapalli Rama Satish",
          "specializationAreas": [
               "Data Mining",
               "Machine Learning",
               "Big Data",
               "Computer Networks"
          ],
          "ratings": {
               "attendance": {
                    "score": 2.01,
                    "totalReviews": 67
               },
               "correction": {
                    "score": 1.65,
                    "totalReviews": 65
               },
               "teaching": {
                    "score": 2.54,
                    "totalReviews": 69
               }
          }
     },
     {
          "name": "Dr. Archana Tiwari",
          "specializationAreas": [
               "Mathematical Control Theory",
               "Optimal Control Theory",
               "Dynamical Systems",
               "Mathematical Modelling",
               "Stability Analysis"
          ],
          "ratings": {
               "attendance": {
                    "score": 3.65,
                    "totalReviews": 51
               },
               "correction": {
                    "score": 3.24,
                    "totalReviews": 51
               },
               "teaching": {
                    "score": 3.34,
                    "totalReviews": 53
               }
          }
     },
     {
          "name": "Dr. Arenkala Kichu",
          "specializationAreas": [
               "English Language Teaching (ELT)",
               "English for Specific Purposes (ESP)",
               "Second Language Acquisition (SLA)",
               "Curriculum & Syllabus Design"
          ],
          "ratings": {
               "attendance": {
                    "score": 3.36,
                    "totalReviews": 36
               },
               "correction": {
                    "score": 2.75,
                    "totalReviews": 36
               },
               "teaching": {
                    "score": 3.19,
                    "totalReviews": 36
               }
          }
     },
     {
          "name": "Dr. Arindam Dey",
          "specializationAreas": [
               "Optimization problem",
               "Genetic Algorithm",
               "Fuzzy set & Fuzzy Logic",
               "Artificial intelligence",
               "Graph theory"
          ],
          "ratings": {
               "attendance": {
                    "score": 3.75,
                    "totalReviews": 8
               },
               "correction": {
                    "score": 3.43,
                    "totalReviews": 7
               },
               "teaching": {
                    "score": 2.13,
                    "totalReviews": 8
               }
          }
     },
     {
          "name": "Dr. Arpana Venu",
          "specializationAreas": [
               "Intra-Asian Travel Writing",
               "Translation Studies",
               "Bhasha Literatures",
               "Queer Studies",
               "Film Studies"
          ],
          "ratings": {
               "attendance": {
                    "score": 4.38,
                    "totalReviews": 52
               },
               "correction": {
                    "score": 4.31,
                    "totalReviews": 52
               },
               "teaching": {
                    "score": 4.56,
                    "totalReviews": 52
               }
          }
     },
     {
          "name": "Dr. Arun Kumar Sinha",
          "specializationAreas": [
               "Analog Electronics",
               "Integrated circuit designs",
               "VLSI circuits and simulations"
          ],
          "ratings": {
               "attendance": {
                    "score": 1.23,
                    "totalReviews": 69
               },
               "correction": {
                    "score": 1.19,
                    "totalReviews": 68
               },
               "teaching": {
                    "score": 1.18,
                    "totalReviews": 67
               }
          }
     },
     {
          "name": "Dr. Arun Kumar Yadav",
          "specializationAreas": [
               "Orbital Mechanics",
               "Control of Spacecraft",
               "Trajectory Optimization",
               "Nonlinear Dynamics",
               "Dynamical Systems"
          ],
          "ratings": {
               "attendance": {
                    "score": 1.44,
                    "totalReviews": 71
               },
               "correction": {
                    "score": 1.40,
                    "totalReviews": 70
               },
               "teaching": {
                    "score": 2.03,
                    "totalReviews": 72
               }
          }
     },
     {
          "name": "Dr. Arunkumar Balakrishnan",
          "specializationAreas": [
               "Cryptography",
               "Computer Networks",
               "Blockchain",
               "Network Security"
          ],
          "ratings": {
               "attendance": {
                    "score": 3.09,
                    "totalReviews": 22
               },
               "correction": {
                    "score": 2.50,
                    "totalReviews": 24
               },
               "teaching": {
                    "score": 3.50,
                    "totalReviews": 22
               }
          }
     },
     {
          "name": "Dr.Arunkumar Sivakumar",
          "specializationAreas": [
               "Marketing Management",
               "Business Research Methods",
               "Digital and Social Media Marketing",
               "Retailing",
               "Strategic Management"
          ],
          "ratings": {
               "attendance": {
                    "score": 4.86,
                    "totalReviews": 7
               },
               "correction": {
                    "score": 4.29,
                    "totalReviews": 7
               },
               "teaching": {
                    "score": 4.86,
                    "totalReviews": 7
               }
          }
     },
     {
          "name": "Dr. Ashish Gupta",
          "specializationAreas": [
               "Digital Signal Processing",
               "Digital Image Processing",
               "Machine Learning",
               "Data Science",
               "Filter Design"
          ],
          "ratings": {
               "attendance": {
                    "score": 4.56,
                    "totalReviews": 36
               },
               "correction": {
                    "score": 4.53,
                    "totalReviews": 34
               },
               "teaching": {
                    "score": 3.89,
                    "totalReviews": 36
               }
          }
     },
     {
          "name": "Dr. Aswathy R K",
          "specializationAreas": [
               "Fractal theory",
               "Fixed point theory",
               "Dynamical systems",
               "Iterated Function Systems",
               "Self-similar sets"
          ],
          "ratings": {
               "attendance": {
                    "score": 4.76,
                    "totalReviews": 58
               },
               "correction": {
                    "score": 4.70,
                    "totalReviews": 57
               },
               "teaching": {
                    "score": 4.76,
                    "totalReviews": 58
               }
          }
     },
     {
          "name": "Dr. Atul Shankar Mani Tripathi",
          "specializationAreas": [
               "Organic /Flexible Electronics",
               "Low Power CMOS VLSI Design",
               "Semiconductor Device Modelling",
               "Electrocaloric Devices"
          ],
          "ratings": {
               "attendance": {
                    "score": 4.67,
                    "totalReviews": 15
               },
               "correction": {
                    "score": 4.07,
                    "totalReviews": 15
               },
               "teaching": {
                    "score": 3.13,
                    "totalReviews": 15
               }
          }
     },
     {
          "name": "Dr. Aswathy R K",
          "specializationAreas": [
               "Fractal theory",
               "Fixed point theory",
               "Dynamical systems",
               "Iterated Function Systems",
               "Self-similar sets"
          ],
          "ratings": {
               "attendance": {
                    "score": 4.76,
                    "totalReviews": 58
               },
               "correction": {
                    "score": 4.70,
                    "totalReviews": 57
               },
               "teaching": {
                    "score": 4.76,
                    "totalReviews": 58
               }
          }
     }
]
     ;

// Function to create and add profile cards to the DOM
function createProfileCards() {
     const container = document.getElementById('profile-container');

     facultyProfiles.forEach(profile => {
          // Create main profile card div
          const profileCard = document.createElement('div');
          profileCard.classList.add('profileCard');
          profileCard.dataset.name = profile.name;

          // Create profile details div
          const profileDetails = document.createElement('div');
          profileDetails.classList.add('profile-details');

          // Add name
          const nameElement = document.createElement('h2');
          nameElement.textContent = profile.name;
          profileDetails.appendChild(nameElement);

          // Add specialization
          const specializationElement = document.createElement('p');
          specializationElement.classList.add('specialization');
          specializationElement.textContent = `Specialization Areas: ${profile.specialization}`;
          profileDetails.appendChild(specializationElement);

          // Add ratings
          const ratingsDiv = document.createElement('div');
          ratingsDiv.classList.add('ratings');

          // Attendance rating
          const attendanceDiv = document.createElement('div');
          attendanceDiv.innerHTML = `<span>Attendance</span><span class="rating">${profile.attendance} /5</span>`;
          ratingsDiv.appendChild(attendanceDiv);

          // Correction rating
          const correctionDiv = document.createElement('div');
          correctionDiv.innerHTML = `<span>Correction</span><span class="rating">${profile.correction} /5</span>`;
          ratingsDiv.appendChild(correctionDiv);

          // Teaching rating
          const teachingDiv = document.createElement('div');
          teachingDiv.innerHTML = `<span>Teaching</span><span class="rating">${profile.teaching} /5</span>`;
          ratingsDiv.appendChild(teachingDiv);

          profileDetails.appendChild(ratingsDiv);
          profileCard.appendChild(profileDetails);

          container.appendChild(profileCard); // Append profile card to container
     });
}

// Call the function to generate profile cards on page load
document.addEventListener("DOMContentLoaded", createProfileCards);
function searchFunction() {
     let input = document.getElementById('search').value.toLowerCase();
     let cards = document.querySelectorAll('.profileCard');

     cards.forEach(profileCard => {
          let name = profileCard.getAttribute('data-name').toLowerCase();
          if (name.includes(input)) {
               profileCard.classList.remove('hidden');
          } else {
               profileCard.classList.add('hidden');
          }
     });
}
