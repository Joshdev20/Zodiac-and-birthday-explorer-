// Zodiac Data - All 12 signs with details
const zodiacData = [
    { name: "Aries", icon: "♈️", dates: "March 21 - April 19", traits: ["Bold", "Confident", "Energetic", "Courageous"], story: "Aries is the fiery trailblazer, always first to jump into action." },
    { name: "Taurus", icon: "♉️", dates: "April 20 - May 20", traits: ["Reliable", "Patient", "Practical", "Loyal"], story: "Taurus loves comfort, beauty, and building a stable life." },
    { name: "Gemini", icon: "♊️", dates: "May 21 - June 20", traits: ["Curious", "Adaptable", "Outgoing", "Intelligent"], story: "Gemini thrives on curiosity and variety, always exploring new ideas." },
    { name: "Cancer", icon: "♋️", dates: "June 21 - July 22", traits: ["Emotional", "Nurturing", "Intuitive", "Loyal"], story: "Cancer nurtures all it loves and has a deep emotional core." },
    { name: "Leo", icon: "♌️", dates: "July 23 - August 22", traits: ["Confident", "Creative", "Charismatic", "Passionate"], story: "Leo shines bright, naturally drawn to the spotlight." },
    { name: "Virgo", icon: "♍️", dates: "August 23 - September 22", traits: ["Analytical", "Detail-oriented", "Practical", "Hardworking"], story: "Virgo excels at perfecting details and improving everything." },
    { name: "Libra", icon: "♎️", dates: "September 23 - October 22", traits: ["Charming", "Diplomatic", "Balanced", "Romantic"], story: "Libra seeks balance, beauty, and harmony in all areas." },
    { name: "Scorpio", icon: "♏️", dates: "October 23 - November 21", traits: ["Mysterious", "Passionate", "Loyal", "Transformative"], story: "Scorpio’s intensity leads to powerful transformations." },
    { name: "Sagittarius", icon: "♐️", dates: "November 22 - December 21", traits: ["Adventurous", "Optimistic", "Independent", "Philosophical"], story: "Sagittarius craves freedom, knowledge, and adventure." },
    { name: "Capricorn", icon: "♑️", dates: "December 22 - January 19", traits: ["Ambitious", "Disciplined", "Practical", "Responsible"], story: "Capricorn works hard to build lasting success." },
    { name: "Aquarius", icon: "♒️", dates: "January 20 - February 18", traits: ["Innovative", "Independent", "Humanitarian", "Eccentric"], story: "Aquarius is a visionary thinker who loves breaking norms." },
    { name: "Pisces", icon: "♓️", dates: "February 19 - March 20", traits: ["Compassionate", "Creative", "Dreamy", "Spiritual"], story: "Pisces blends imagination with deep emotional sensitivity." }
];

// Helper to get a zodiac object by name
function getZodiacByName(name) {
    return zodiacData.find(z => z.name.toLowerCase() === name.toLowerCase());
}

// Compatibility Matrix
const compatibility = {
    Aries: { Aries: "Moderate", Taurus: "Challenging", Gemini: "Exciting", Cancer: "Difficult", Leo: "Great", Virgo: "Difficult", Libra: "Interesting", Scorpio: "Intense", Sagittarius: "Perfect", Capricorn: "Challenging", Aquarius: "Fun", Pisces: "Tricky" },
    Taurus: { Aries: "Challenging", Taurus: "Stable", Gemini: "Unpredictable", Cancer: "Perfect", Leo: "Difficult", Virgo: "Excellent", Libra: "Complicated", Scorpio: "Strong", Sagittarius: "Tense", Capricorn: "Perfect", Aquarius: "Difficult", Pisces: "Harmonious" },
    Gemini: { Aries: "Exciting", Taurus: "Unpredictable", Gemini: "Dynamic", Cancer: "Sensitive", Leo: "Energetic", Virgo: "Tense", Libra: "Excellent", Scorpio: "Complicated", Sagittarius: "Exciting", Capricorn: "Challenging", Aquarius: "Perfect", Pisces: "Emotional" },
    Cancer: { Aries: "Difficult", Taurus: "Perfect", Gemini: "Sensitive", Cancer: "Emotional", Leo: "Complicated", Virgo: "Harmonious", Libra: "Challenging", Scorpio: "Excellent", Sagittarius: "Tense", Capricorn: "Opposites", Aquarius: "Unpredictable", Pisces: "Perfect" },
    Leo: { Aries: "Great", Taurus: "Difficult", Gemini: "Energetic", Cancer: "Complicated", Leo: "Powerful", Virgo: "Challenging", Libra: "Exciting", Scorpio: "Intense", Sagittarius: "Perfect", Capricorn: "Tense", Aquarius: "Magnetic", Pisces: "Difficult" },
    Virgo: { Aries: "Difficult", Taurus: "Excellent", Gemini: "Tense", Cancer: "Harmonious", Leo: "Challenging", Virgo: "Stable", Libra: "Complicated", Scorpio: "Strong", Sagittarius: "Difficult", Capricorn: "Perfect", Aquarius: "Unpredictable", Pisces: "Emotional" },
    Libra: { Aries: "Interesting", Taurus: "Complicated", Gemini: "Excellent", Cancer: "Challenging", Leo: "Exciting", Virgo: "Complicated", Libra: "Balanced", Scorpio: "Intense", Sagittarius: "Great", Capricorn: "Tense", Aquarius: "Perfect", Pisces: "Sensitive" },
    Scorpio: { Aries: "Intense", Taurus: "Strong", Gemini: "Complicated", Cancer: "Excellent", Leo: "Intense", Virgo: "Strong", Libra: "Intense", Scorpio: "Volatile", Sagittarius: "Tense", Capricorn: "Powerful", Aquarius: "Complicated", Pisces: "Perfect" },
    Sagittarius: { Aries: "Perfect", Taurus: "Tense", Gemini: "Exciting", Cancer: "Tense", Leo: "Perfect", Virgo: "Difficult", Libra: "Great", Scorpio: "Tense", Sagittarius: "Adventurous", Capricorn: "Challenging", Aquarius: "Exciting", Pisces: "Sensitive" },
    Capricorn: { Aries: "Challenging", Taurus: "Perfect", Gemini: "Challenging", Cancer: "Opposites", Leo: "Tense", Virgo: "Perfect", Libra: "Tense", Scorpio: "Powerful", Sagittarius: "Challenging", Capricorn: "Stable", Aquarius: "Unpredictable", Pisces: "Strong" },
    Aquarius: { Aries: "Fun", Taurus: "Difficult", Gemini: "Perfect", Cancer: "Unpredictable", Leo: "Magnetic", Virgo: "Unpredictable", Libra: "Perfect", Scorpio: "Complicated", Sagittarius: "Exciting", Capricorn: "Unpredictable", Aquarius: "Electric", Pisces: "Emotional" },
    Pisces: { Aries: "Tricky", Taurus: "Harmonious", Gemini: "Emotional", Cancer: "Perfect", Leo: "Difficult", Virgo: "Emotional", Libra: "Sensitive", Scorpio: "Perfect", Sagittarius: "Sensitive", Capricorn: "Strong", Aquarius: "Emotional", Pisces: "Dreamy" }
};

// Function to check compatibility between two zodiac signs
function checkCompatibility() {
    const birthDate = document.getElementById('birthDate').value;
    if (!birthDate) {
        alert("Please enter your birth date first.");
        return;
    }

    const [year, month, day] = birthDate.split('-').map(Number);
    const userSign = getZodiac(month, day);
    const partnerSign = document.getElementById('compatibilitySign').value;

    const result = compatibility[userSign]?.[partnerSign];

    if (result) {
        document.getElementById('compatibilityResult').innerText = `${userSign} & ${partnerSign}: ${result}`;
    } else {
        document.getElementById('compatibilityResult').innerText = `No compatibility data found for ${userSign} & ${partnerSign}.`;
    }
}
