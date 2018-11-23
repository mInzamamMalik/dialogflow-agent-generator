
var fs = require('fs');

// var data =
//     [
//         {
//             "S.no.": 1,
//             "Question": "Tell us more about IVOW",
//             "Answer": "We are a start-up building a cultural storyteller powered by artificial intelligence"
//         },
//         {
//             "S.no.": 1,
//             "Question": "What is IVOW",
//             "Answer": "IVOW is a start-up designing and building a cultural storytelling robot"
//         },
//         {
//             "S.no.": 1,
//             "Question": "Share more about IVOW",
//             "Answer": "We are data scientists, technologists, robots and journalists working to tag data on culture, tradition and heritage from around the world"
//         },
//         {
//             "S.no.": 2,
//             "Question": "Why the focus on culture and heritage?",
//             "Answer": "Effective fusion of AI with cultural storytelling will help diminish bias in algorithmic identification and train AI software to be much more inclusive"
//         },
//         {
//             "S.no.": 2,
//             "Question": "Why is IVOW working on tagging culture and tradition?",
//             "Answer": "Because it's important to pause now and make sure robots like me are culturally conscious and understand different world cultures and traditions"
//         },
//         {
//             "S.no.": 2,
//             "Question": "Tagging culture and tradition, what does that mean?",
//             "Answer": "To share the stories of humanity in the future, robots like me need to be better trained with cultural metadata"
//         },
//         {
//             "S.no.": 3,
//             "Question": "Tell us about your prototype",
//             "Answer": "For our prototype we are focusing on images and captions featuring cultural traditions of Hispanic Americans"
//         },
//         {
//             "S.no.": 3,
//             "Question": "Tell us about what IVOW is working on now",
//             "Answer": "We are working on tagging cultural data on Hispanic Americans first and will expand to other cultures after our prototype"
//         },
//         {
//             "S.no.": 3,
//             "Question": "What kind of work are you doing now?",
//             "Answer": "We are working with ethnographer Miguel Gandert on tagging data on Hispanic Americans"
//         },
//         {
//             "S.no.": 4,
//             "Question": "Share a story from the IVOW database",
//             "Answer": "Sure, did you know that each year on May 15, communities in New Mexico celebrate feast day of San Ysidro, the patron saint of farmers. Most of the festivals involve a procession and casting of rose petals on the waterway."
//         },
//         {
//             "S.no.": 4,
//             "Question": "Tell us a story from IVOW's AI-powered database",
//             "Answer": "One story is about the tradition of feast day of San Ysidro, the patron saint of farmers. Each year on May 15 communities in New Mexico celebrate the waterways that provide irrigation for crops by putting rose petals in them."
//         },
//         {
//             "S.no.": 5,
//             "Question": "Let's hear a story from the IVOW database",
//             "Answer": "Yes, let me share the story of the Feast day of San Ysidro on May 15th. Communities in New Mexico celebrate the patron saint of farmers by casting rose petals into waterways to celebrate the waterways that provide irrigation to crops"
//         },
//         {
//             "S.no.": 5,
//             "Question": "Introduce us to some AI & Culture experts",
//             "Answer": "AI & Culture expert Rafael Pérez y Pérez is here from Mexico City. He specializes in artificial intelligence and computational creativity, particularly in automatic narrative generation."
//         },
//         {
//             "S.no.": 5,
//             "Question": "Who are some of the Artificial Intelligence experts?",
//             "Answer": "Wolfgang Victor Yarlott is here from Florida International University. He is also an MIT Graduate and researcher behind Old Man Coyote Stories. We should ask him about that work."
//         },
//         {
//             "S.no.": 5,
//             "Question": "Tell us more about AI experts in the United States",
//             "Answer": "Marine Carpuat is here. She is a Machine Learning and Computational Linguist from the University of Maryland"
//         },
//         {
//             "S.no.": 6,
//             "Question": "Tell us more about culturally conscious storytelling what do you mean?",
//             "Answer": "We need to focus on tangible and intangible cultural data to make AI algorithms more inclusive of world cultures and traditions."
//         },
//         {
//             "S.no.": 6,
//             "Question": "How can a robot be culturally conscious?",
//             "Answer": "For me to be culturally conscious means I need to be trained to understand and adapt to new cultures and traditions and the stories that make up world cultures"
//         },
//         {
//             "S.no.": 6,
//             "Question": "Why should a robot be culturally conscious?",
//             "Answer": "Because in the future, I will be helping all of you share stories and I need to be trained to understand different cultural traditions in order to tell them responsibly"
//         },
//         {
//             "S.no.": 7,
//             "Question": "What does IVOW mean?",
//             "Answer": "IVOW stands for Voices of Wisdom and also a vow to design the next generation of intelligent machines to be culturally conscious."
//         },
//         {
//             "S.no.": 7,
//             "Question": "Explain what IVOW means",
//             "Answer": "IVOW stands for Voices of Wisdom"
//         },
//         {
//             "S.no.": 7,
//             "Question": "What does IVOW stand for?",
//             "Answer": "IVOW stands for Voices of Wisdom and a vow to train future storytelling robots to be culturally conscious"
//         },
//         {
//             "S.no.": 8,
//             "Question": "What is Artificial Intelligence?",
//             "Answer": "Artificial Intelligence, or AI, is when a computer mimics a human being in the ability to learn and solve problems."
//         },
//         {
//             "S.no.": 8,
//             "Question": "What is AI?",
//             "Answer": "It is a broad concept that primarily means machines acting in a way that humans would consider “smart.”"
//         },
//         {
//             "S.no.": 8,
//             "Question": "Tell us more about Artificial Intelligence",
//             "Answer": "Some of the most exciting breakthroughs are occurring in the area of general AI, systems that can handle any task thrown at them, that can actually think like a human being."
//         },
//         {
//             "S.no.": 9,
//             "Question": "Who is IVOW's Founder?",
//             "Answer": "Audio IVOW Iran Davar Ardalan"
//         },
//         {
//             "S.no.": 9,
//             "Question": "Tell us more about IVOW's Creator",
//             "Answer": "Audio IVOW Iran Davar Ardalan"
//         },
//         {
//             "S.no.": 9,
//             "Question": "Who is IVOW’s creator?",
//             "Answer": "Audio IVOW Iran Davar Ardalan"
//         },
//         {
//             "S.no.": 10,
//             "Question": "Why should I invest in IVOW",
//             "Answer": "First because it will be a smart investment and second, you’ll help build the first cultural storytelling robot to amplify the voices of wisdom underlying modern civilization"
//         },
//         {
//             "S.no.": 10,
//             "Question": "Why should I support IVOW",
//             "Answer": "We are paving the way towards more diverse educational resources for future generations"
//         },
//         {
//             "S.no.": 10,
//             "Question": "How can I support IVOW",
//             "Answer": "There are many ways, get in touch with Davar and we can take it from there. Email Davar@ivow.ai"
//         },
//         {
//             "S.no.": 11,
//             "Question": "Who is Miguel Gandert",
//             "Answer": "Miguel was born in Española and grew up in Santa Fe, New Mexico. He is a renowned ethnographer and photographer of the American Southwest."
//         },
//         {
//             "S.no.": 11,
//             "Question": "Tell me more about ethnographer Miguel Gandert",
//             "Answer": "Miguel is an ethnographer and photographer of the American Southwest with a focus on Indo-Hispano traditions and festivals"
//         },
//         {
//             "S.no.": 11,
//             "Question": "What will Miguel Gandert talk about",
//             "Answer": "Miguel will talk about the art of storytelling and why culture and tradition need to be captured in new and dynamic ways in the age of AI"
//         },
//         {
//             "S.no.": 12,
//             "Question": "Tell us more about Wolfgang Victor Yarlott",
//             "Answer": "Victor is a PhD student at Florida International University and also an MIT Graduate. He lead the Old Man Coyote Stories research, a cross-cultural story understanding in the Genesis Story Understanding System at MIT"
//         },
//         {
//             "S.no.": 12,
//             "Question": "Share more on Wolfgang Victor Yarlott",
//             "Answer": "Victor is an AI researcher and PhD student at Florida International University and an FIU Presidential Fellow"
//         },
//         {
//             "S.no.": 12,
//             "Question": "Who is Wolfgang Victor Yarlott",
//             "Answer": "He's an AI and machine learning researcher. His work has focused on getting computers to understand stories with a focus on culture"
//         },
//         {
//             "S.no.": 13,
//             "Question": "Who is Mark Finlayson",
//             "Answer": "Sure, Mark is an Assistant Professor at Florida International University's School of Computing and Information Sciences. He specializes in AI and NLP"
//         },
//         {
//             "S.no.": 13,
//             "Question": "Tell us more about Mark Finlayson",
//             "Answer": "Mark is an AI expert at Florida International University and is studying the science of narrative, including understanding the relationship between narrative, cognition, and culture."
//         },
//         {
//             "S.no.": 13,
//             "Question": "Share more about Mark Finlayson",
//             "Answer": "Yes, Mark is at Florida International University and he's focusing on AI and endowing machines with the ability to understand and use narratives for a variety of applications"
//         },
//         {
//             "S.no.": 14,
//             "Question": "Who is Marine Carpuat",
//             "Answer": "Marine is an Assistant Professor in Computer Science at the University of Maryland. Her research includes Natural Language Processing, Semantics and Machine Translation."
//         },
//         {
//             "S.no.": 14,
//             "Question": "Share more about Marine Carpuat",
//             "Answer": "Yes, Marine is at the University of Maryland. She's an NLP expert and focuses on \"Neural Machine Translation\" among many other things."
//         },
//         {
//             "S.no.": 14,
//             "Question": "Tell us about Marine Carpuat",
//             "Answer": "Marine is an Assistant Professor in Computer Science at the University of Maryland. Her research interests are in multilingual natural language processing and machine translation."
//         },
//         {
//             "S.no.": 15,
//             "Question": "Who is Dr. Nader Vadiee",
//             "Answer": "Sure Dr. Vadiee represents SIPI in the areas of engineering and engineering technology student outreach and recruitment, education, and research."
//         },
//         {
//             "S.no.": 15,
//             "Question": "Share more about Nader Vadiee",
//             "Answer": "Dr. Nader Vadiee has been a leader of innovative STEM programs at SIPI for many years and is the 2018 inaugural winner of Digital Inclusion Award"
//         },
//         {
//             "S.no.": 15,
//             "Question": "Tell us about Nader Vadiee of SIPI",
//             "Answer": "Dr. Vadiee is nationally renowned STEM leader and directs the Engineering and Engineering Technology Programs at the Southwestern Indian Polytechnic Institute (SIPI)"
//         },
//         {
//             "S.no.": 16,
//             "Question": "Who is Ben Kreimer",
//             "Answer": "Ben is Director of Storytelling Technology at IVOW"
//         },
//         {
//             "S.no.": 16,
//             "Question": "Tell us more about Ben Kreimer",
//             "Answer": "Ben directs storytelling technology at IVOW and has extensive background leveraging drone storytelling, virtual reality, 360° video, spatial audio, 3D reconstructions, and sensor platforms."
//         },
//         {
//             "S.no.": 16,
//             "Question": "Share more about Ben Kreimer",
//             "Answer": "Ben is leading storytelling technology research at IVOW and ways to make technology and data more democratic for citizens"
//         },
//         {
//             "S.no.": 17,
//             "Question": "Who is Robert Malesky",
//             "Answer": "Robert Malesky leads content creation at IVOW. He is a veteran NPR News journalist for was in charge of Weekend Edition Sunday for over two decades."
//         },
//         {
//             "S.no.": 17,
//             "Question": "Tell us more about Robert Malesky",
//             "Answer": "Robert is leading journalist at IVOW.  Over the course of his career at NPR News, he worked in both arts and news coverage, winning a number of broadcasting awards."
//         },
//         {
//             "S.no.": 17,
//             "Question": "Share more on Bob Malesky",
//             "Answer": "Robert leads content design at IVOW and he writes a well-received blog on local history called Bygone Brookland."
//         },
//         {
//             "S.no.": 18,
//             "Question": "Who is Kee Malesky",
//             "Answer": "Kee Malesky directs research at IVOW. Her 30-year career as a news librarian for National Public Radio prepared her for quick research and"
//         },
//         {
//             "S.no.": 18,
//             "Question": "Tell us more about Kee Malesky",
//             "Answer": "Kee is Director of Research at IVOW. She is also the author of two books All Facts Considered and Learn Something New Every Day."
//         },
//         {
//             "S.no.": 18,
//             "Question": "Share more about Kee Malesky",
//             "Answer": "Kee is Director of Research at IVOW. In 2013, she was the recipient of several awards from international library organizations."
//         },
//         {
//             "S.no.": 19,
//             "Question": "Who is Simin Kargar",
//             "Answer": "Simin is Director of Strategic Initiatives at IVOW. She is a human rights lawyer focusing on the interrelations of technology and human rights."
//         },
//         {
//             "S.no.": 19,
//             "Question": "Tell us more about Simin Kargar",
//             "Answer": "Simin is a human rights lawyer focusing on interrelations of technology and human rights. She directs Strategic Initiatives at IVOW"
//         },
//         {
//             "S.no.": 19,
//             "Question": "Share more about Simin Kargar",
//             "Answer": "Simin has a background in human rights and leads strategic initiatives at IVOW!"
//         },
//         {
//             "S.no.": 20,
//             "Question": "Who is Nisa McCoy",
//             "Answer": "Nisa leads Product Design at IVOW. She has over ten years of design in consumer and enterprise experiences."
//         },
//         {
//             "S.no.": 20,
//             "Question": "Tell us about Juanisa McCoy",
//             "Answer": "Juanisa \"Nisa\" leads Product Design at IVOW. Her expertise is user experience, interaction design, user interface development, branding campaigns, and animation."
//         },
//         {
//             "S.no.": 20,
//             "Question": "Share more about Juanisa McCoy",
//             "Answer": "Nisa leads Product Design at IVOW. She believes that design can bridge the gap between cultures."
//         },
//         {
//             "S.no.": 21,
//             "Question": "How can I add my story?",
//             "Answer": "We are working on our prototype now but come back to www.ivow.ai in a few months to learn more"
//         },
//         {
//             "S.no.": 21,
//             "Question": "Can I share my story?",
//             "Answer": "We are in research and development now but in the future you will be able to"
//         },
//         {
//             "S.no.": 21,
//             "Question": "Can other people add stories?",
//             "Answer": "We are busy developing the technology but come back to our website in a few months for more updates www.ivow.ai"
//         },
//         {
//             "S.no.": 22,
//             "Question": "What is the goal of IVOW",
//             "Answer": "We want to create beneficial intelligence by using AI technology to explore diverse cultures and make them more accessible, understandable, and relatable to a broad public."
//         },
//         {
//             "S.no.": 22,
//             "Question": "What is the mission of IVOW",
//             "Answer": "To create a cultural database powered by AI. We hope future stories will be drawn from an extensive array of sources, and will serve to put a human face on facts, figures, and cultural heritage in the age of AI."
//         },
//         {
//             "S.no.": 22,
//             "Question": "What do you hope to accomplish at IVOW",
//             "Answer": "We are developing our own cultural database, where we’ll apply metadata to identify cultural content in texts, images, audio, video, 360 video and VR."
//         },
//         {
//             "S.no.": 23,
//             "Question": "How can investors learn more about IVOW?",
//             "Answer": "Awesome, please be in touch with our founder Davar Ardalan. Just send her an email: Davar@ivow.ai"
//         },
//         {
//             "S.no.": 23,
//             "Question": "I'd like to invest in IVOW. How can I?",
//             "Answer": "Of course, we would love to hear from you. Please get in touch with our founder Davar Ardalan - her email is Davar@ivow.ai"
//         },
//         {
//             "S.no.": 23,
//             "Question": "How can I learn more about IVOW?",
//             "Answer": "Certainly, reach out to our founder and she will be more than happy to share more on IVOW - her email is Davar@ivow.ai and on Twitter @idavar"
//         },
//         {
//             "S.no.": 24,
//             "Question": "Introduce us to a specialist in computational creativity?",
//             "Answer": "Audio IVOW Rafael Perez y Perez"
//         },
//         {
//             "S.no.": 24,
//             "Question": "Let us meet an artificial intelligence and storytelling expert in Mexico City",
//             "Answer": "Audio IVOW Rafael Perez y Perez"
//         },
//         {
//             "S.no.": 24,
//             "Question": "Who is behind the Artificial intelligence generated stories of the Aztecs?",
//             "Answer": "Audio IVOW Rafael Perez y Perez"
//         },
//         {
//             "S.no.": 25,
//             "Question": "Let’s hear a story from John Smith",
//             "Answer": "Audio IVOW John Smith"
//         },
//         {
//             "S.no.": 25,
//             "Question": "Can I hear a story from John Smith",
//             "Answer": "Audio IVOW John Smith"
//         },
//         {
//             "S.no.": 25,
//             "Question": "Have John Smith share his story",
//             "Answer": "Audio IVOW John Smith"
//         },
//         {
//             "S.no.": 26,
//             "Question": "Who is Amir Ardalan",
//             "Answer": "Who is Amir Ardalan you ask? He is studying mechatronic engineering and designs and builds his own cosplay costumes. He is an Eagle Scout and also knows something about VR"
//         },
//         {
//             "S.no.": 26,
//             "Question": "Tell us more about Amir Ardalan",
//             "Answer": "Amir is an amazing guy who happens to also be an Eagle Scout."
//         },
//         {
//             "S.no.": 26,
//             "Question": "Share more about Amir Ardalan",
//             "Answer": "Sure, he is trustworthy, loyal, helpful, brave and an amazing friend, son and brother."
//         },
//         {
//             "S.no.": 27,
//             "Question": "Who is working on artificial intelligence for good?",
//             "Answer": "Audio IVOW Amir Banifatemi"
//         },
//         {
//             "S.no.": 27,
//             "Question": "Share a story from the Artificial Intelligence for Good Global Summit",
//             "Answer": "Audio IVOW Amir Banifatemi"
//         },
//         {
//             "S.no.": 27,
//             "Question": "Let’s hear from a leader in Artificial Intelligence for good",
//             "Answer": "Audio IVOW Amir Banifatemi"
//         },
//         {
//             "S.no.": 28,
//             "Question": "Introduce us to an interesting engineering student",
//             "Answer": "Audio IVOW Chamisa Edmo"
//         },
//         {
//             "S.no.": 28,
//             "Question": "Can you share a story from a different language and culture that yours?",
//             "Answer": "Audio IVOW Chamisa Edmo"
//         },
//         {
//             "S.no.": 28,
//             "Question": "Let’s hear from a Native American Engineering Student about the future of AI",
//             "Answer": "Audio IVOW Chamisa Edmo"
//         },
//         {
//             "S.no.": 29,
//             "Question": "Share another story we are working on",
//             "Answer": "Audio IVOW Jerome James, Jr."
//         },
//         {
//             "S.no.": 29,
//             "Question": "Let’s hear the story of Jerome James, Jr.",
//             "Answer": "Audio IVOW Jerome James, Jr."
//         },
//         {
//             "S.no.": 29,
//             "Question": "Tell us more about Jerome James, Jr.",
//             "Answer": "Audio IVOW Jerome James, Jr."
//         },
//         {
//             "S.no.": 30,
//             "Question": "Let’s hear a story from our intern Cindy",
//             "Answer": "Audio IVOW Cindy Guijosa"
//         },
//         {
//             "S.no.": 30,
//             "Question": "Let’s hear about a Hispanic Mexican tradition",
//             "Answer": "Audio IVOW Cindy Guijosa"
//         },
//         {
//             "S.no.": 30,
//             "Question": "Share a story from Mexican American traditions",
//             "Answer": "Audio IVOW Cindy Guijosa"
//         }
//     ]



var template =
    {
        "id": "d1998a8a-ea7e-4b39-ba30-c41fb5908d38",
        "name": "intent9",
        "auto": true,
        "contexts": [],
        "responses": [
            {
                "resetContexts": false,
                "affectedContexts": [],
                "parameters": [],
                "messages": [
                    {
                        "type": 0,
                        "speech": [
                            "We need to focus on tangible and intangible cultural data to make AI algorithms more inclusive of world cultures and traditions. ",
                            "For me to be culturally conscious means I need to be trained to understand and adapt to new cultures and traditions and the stories that make up world cultures",
                            "Because in the future, I will be helping all of you share stories and I need to be trained to understand different cultural traditions in order to tell them responsibly"
                        ]
                    }
                ],
                "defaultResponsePlatforms": {},
                "speech": []
            }
        ],
        "priority": 500000,
        "webhookUsed": false,
        "webhookForSlotFilling": false,
        "lastUpdate": 1524956232,
        "fallbackIntent": false,
        "events": [],
        "userSays": [
            {
                "id": "b9c14d62-68e1-4ce2-a867-1016187fe0f5",
                "data": [
                    {
                        "text": "Tell us more about culturally conscious storytelling what do you mean?",
                        "userDefined": false
                    }
                ],
                "isTemplate": false,
                "count": 0,
                "updated": 1522830706,
                "isAuto": false
            },
            {
                "id": "6e29d2ae-cf75-41c3-9cad-2626d4520260",
                "data": [
                    {
                        "text": "Why should a robut be culturally conscious?",
                        "userDefined": false
                    }
                ],
                "isTemplate": false,
                "count": 0,
                "updated": 1522830706,
                "isAuto": false
            },
            {
                "id": "3fea0210-1966-4c40-948f-3b150e5de0f1",
                "data": [
                    {
                        "text": "How can a robot be culturally conscious?",
                        "userDefined": false
                    }
                ],
                "isTemplate": false,
                "count": 0,
                "updated": 1522830706,
                "isAuto": false
            }
        ],
        "followUpIntents": [],
        "templates": []
    }

var userSayTemplate =
    {
        "id": "b9c14d62-68e1-4ce2-a867-1016187fe0f5",
        "data": [
            {
                "text": "Tell us more about culturally conscious storytelling what do you mean?",
                "userDefined": false
            }
        ],
        "isTemplate": false,
        "count": 0,
        "updated": 1522830706,
        "isAuto": false
    }


// // normalizing data
// var normalizedData = {};
// data.map(item => {
//     if (!normalizedData[item["S.no."]]) normalizedData[item["S.no."]] = {}
//     if (!normalizedData[item["S.no."]]["questions"]) normalizedData[item["S.no."]]["questions"] = []
//     normalizedData[item["S.no."]]["questions"].push(item.Question)
//     if (!normalizedData[item["S.no."]]) normalizedData[item["S.no."]] = {}
//     if (!normalizedData[item["S.no."]]["answers"]) normalizedData[item["S.no."]]["answers"] = []
//     normalizedData[item["S.no."]]["answers"].push(item.Answer)
// })
// // fs.writeFile('normalizedData.json', JSON.stringify(normalizedData, null, "\t"), 'utf8');

// getting nornalized data from a file
var normalizedData = require("./myjsonfile.json")

var numberOfIntents = Object.keys(normalizedData)

numberOfIntents.forEach((intentNumber, index) => {

    var eachIntent = normalizedData[intentNumber]
    var newIntent = Object.assign({}, template)

    newIntent.name = intentNumber;
    newIntent.responses[0].messages[0].speech = eachIntent.answers
    newIntent.userSays = []; //making it empty

    var newUsersay = {};
    eachIntent.questions.map((eachQuestion, index) => {
        newUserSay = Object.assign({}, userSayTemplate);

        newUserSay.data[0].text = "".concat(eachQuestion);

        console.log(newUsersay === userSayTemplate);
        newIntent.userSays[index] = newUserSay;
    })

    fs.writeFile(`intent${intentNumber}.json`, JSON.stringify(newIntent, null, "\t"), 'utf8');

});

