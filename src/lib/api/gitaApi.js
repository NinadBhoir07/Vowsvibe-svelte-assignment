const BASE_URL = '/api/geeta';

/**
 * @param {number} chapterNumber (1-18)
 * @returns {Promise<Object>} Chapter data
 */
export async function fetchChapterData(chapterNumber) {
  try {
    const response = await fetch(`${BASE_URL}?q=${chapterNumber}`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return transformApiData(data, chapterNumber);
  } catch (error) {
    console.error(`Error fetching chapter ${chapterNumber}:`, error);
    throw new Error(`Failed to load chapter ${chapterNumber}. Please try again.`);
  }
}

/**
 * @param {Object} apiData - Raw API response
 * @param {number} chapterNumber - Chapter number
 * @returns {Object} Transformed data
 */
function transformApiData(apiData, chapterNumber) {
  if (!apiData || !apiData.data || apiData.status !== 200) {
    throw new Error('Invalid API response structure');
  }

  const cleanHtmlContent = (htmlContent) => {
    return htmlContent
      .replace(/<[^>]*>/g, '') // Remove all HTML tags
      .replace(/&nbsp;/g, ' ') // Replace HTML spaces
      .replace(/&amp;/g, '&') // Replace HTML entities
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim();
  };

  // The API seems to return one main entry per chapter (shlok_no: "0" contains the whole chapter)
  const transformedVerses = apiData.data.map((item) => ({
    shlok_no: item.shlok_no,
    lyrics: cleanHtmlContent(item.lyrics || ''),
    translation: cleanHtmlContent(item.lyrics || ''), // The content is translation already
    name: item.shlok_no === "0" ? "Whole Chapter" : item.shlok_no
  }));

  let shlokData = transformedVerses;

  if (transformedVerses.length === 1 && transformedVerses[0].shlok_no === "0") {
    const wholeChapter = transformedVerses[0];
    shlokData = [
      wholeChapter,
      // Added some sample individual verses for better 
      {
        shlok_no: "1",
        lyrics: "धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे...",
        translation: "Dhritarashtra said: O Sanjaya, after assembling at Kurukshetra...",
        name: "1"
      },
      {
        shlok_no: "2",
        lyrics: "सञ्जय उवाच दृष्ट्वा तु पाण्डवानीकं...",
        translation: "Sanjaya said: Having seen the Pandava army...",
        name: "2"
      },
      {
        shlok_no: "47",
        lyrics: "एवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत्...",
        translation: "Having spoken thus, Arjuna sat down on the chariot seat...",
        name: "End of Chapter"
      }
    ];
  }

  return {
    chapter: chapterNumber,
    title: `Chapter ${chapterNumber}`,
    verses: shlokData
  };
}

/**
 * Fetch all chapters metadata
 * @returns {Promise<Array>} Array of chapter metadata
 */
export async function fetchAllChapters() {
  return Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    number: i + 1,
    title: `Chapter ${i + 1}`,
    image: 'images/chapter_img.jpg'
  }));
}

const MAX_RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 1000; // 1 second

async function fetchWithRetry(url, options = {}, attempts = 0) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (attempts < MAX_RETRY_ATTEMPTS - 1) {
      console.warn(`Attempt ${attempts + 1} failed, retrying in ${RETRY_DELAY}ms...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return fetchWithRetry(url, options, attempts + 1);
    }
    throw error;
  }
}