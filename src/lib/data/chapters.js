// Chapter data for Bhagavad Gita
export const chapters = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  number: i + 1,
  title: `Chapter ${i + 1}`,
  image: 'images/chapter_img.jpg'
}));

// Sample shlok data for each chapter
export const shloksData = {
  1: [
    {
      shlok_no: "0",
      lyrics: "धृतराष्ट्र उवाच\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥",
      translation: "Dhritarashtra said: O Sanjaya, after my sons and the sons of Pandu assembled in the place of pilgrimage at Kurukshetra, desiring to fight, what did they do?",
      name: "Whole Chapter"
    },
    {
      shlok_no: "1",
      lyrics: "दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।\nआचार्यमुपसङ्गम्य राजा वचनमब्रवीत्॥",
      translation: "At that time, seeing the Pandava army standing in military array, Prince Duryodhana approached his teacher Dronacharya and spoke the following words.",
      name: "1"
    },
    {
      shlok_no: "2",
      lyrics: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्।\nव्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता॥",
      translation: "O my teacher, behold the great army of the sons of Pandu, so expertly arranged by your intelligent disciple, the son of Drupada.",
      name: "2"
    },
    // Add more shloks as needed
    {
      shlok_no: "99",
      lyrics: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
      translation: "Wherever there is Krishna, the master of all mystics, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. That is my opinion.",
      name: "End of Chapter"
    }
  ],
  2: [
    {
      shlok_no: "0",
      lyrics: "संजय उवाच\nतं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम्।\nविषीदन्तमिदं वाक्यमुवाच मधुसूदनः॥",
      translation: "Sanjaya said: Seeing Arjuna full of compassion, his mind depressed, his eyes full of tears, Madhusudana, Krishna, spoke the following words.",
      name: "Whole Chapter"
    },
    {
      shlok_no: "1",
      lyrics: "श्रीभगवानुवाच\nकुतस्त्वा कश्मलमिदं विषमे समुपस्थितम्।\nअनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन॥",
      translation: "The Supreme Personality of Godhead said: My dear Arjuna, how have these impurities come upon you? They are not at all befitting a man who knows the value of life. They lead not to higher planets but to infamy.",
      name: "1"
    },
    // Add more shloks for chapter 2...
    {
      shlok_no: "99",
      lyrics: "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति।\nस्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति॥",
      translation: "That is the way of the spiritual and godly life, after attaining which a man is not bewildered. If one is thus situated even at the hour of death, one can enter into the kingdom of God.",
      name: "End of Chapter"
    }
  ]
  // Add data for remaining chapters (3-18) following the same pattern
};

// Generate shlok data for remaining chapters (3-18) with sample content
for (let i = 3; i <= 18; i++) {
  shloksData[i] = [
    {
      shlok_no: "0",
      lyrics: `Sample Sanskrit text for Chapter ${i} introduction...`,
      translation: `Sample translation for Chapter ${i} introduction...`,
      name: "Whole Chapter"
    },
    {
      shlok_no: "1",
      lyrics: `Sample Sanskrit verse 1 for Chapter ${i}...`,
      translation: `Sample translation for verse 1 of Chapter ${i}...`,
      name: "1"
    },
    {
      shlok_no: "2",
      lyrics: `Sample Sanskrit verse 2 for Chapter ${i}...`,
      translation: `Sample translation for verse 2 of Chapter ${i}...`,
      name: "2"
    },
    {
      shlok_no: "99",
      lyrics: `Sample Sanskrit text for Chapter ${i} conclusion...`,
      translation: `Sample translation for Chapter ${i} conclusion...`,
      name: "End of Chapter"
    }
  ];
}