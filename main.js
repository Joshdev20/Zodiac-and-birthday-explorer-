document.addEventListener('DOMContentLoaded', () => {
    const tarotCard = getRandomTarotCard();
    document.getElementById('tarotCard').innerText = `${tarotCard.name} — ${tarotCard.meaning}`;
});

function showZodiacDetails() { 
    const name = document.getElementById('userName').value;
    const birthDate = document.getElementById('birthDate').value;

    if (!name || !birthDate) {
        alert("Please enter your name and date of birth.");
        return;
    }

    const [year, month, day] = birthDate.split('-').map(Number);
    const zodiac = getZodiac(month, day);
    const zodiacInfo = getZodiacByName(zodiac) || {};  // Safe fallback

    document.getElementById('modalUserName').innerText = name;
    document.getElementById('zodiacIcon').innerText = zodiacInfo.icon || '❓';
    document.getElementById('zodiacName').innerText = zodiac;
    document.getElementById('zodiacTraits').innerText = zodiacInfo.traits?.join(', ') || 'Not defined';
    document.getElementById('zodiacStory').innerText = zodiacInfo.story || 'This zodiac is shrouded in mystery.';

    document.getElementById('horoscope').innerText = zodiacHoroscopes[zodiac] || 'No horoscope available.';
    document.getElementById('luckyNumbers').innerText = getLuckyNumbers();

    fetchBirthEvents(month, day);
    fetchFamousPeople(month, day);

    const tarotCard = getRandomTarotCard();
    document.getElementById('tarotCard').innerText = `${tarotCard.name} — ${tarotCard.meaning}`;

    document.getElementById('resultModal').classList.remove('hidden');
}

// Zodiac Calculation Logic
function getZodiac(month, day) {
    const zodiacDates = [
        { name: "Capricorn", start: [12, 22], end: [1, 19] },
        { name: "Aquarius", start: [1, 20], end: [2, 18] },
        { name: "Pisces", start: [2, 19], end: [3, 20] },
        { name: "Aries", start: [3, 21], end: [4, 19] },
        { name: "Taurus", start: [4, 20], end: [5, 20] },
        { name: "Gemini", start: [5, 21], end: [6, 20] },
        { name: "Cancer", start: [6, 21], end: [7, 22] },
        { name: "Leo", start: [7, 23], end: [8, 22] },
        { name: "Virgo", start: [8, 23], end: [9, 22] },
        { name: "Libra", start: [9, 23], end: [10, 22] },
        { name: "Scorpio", start: [10, 23], end: [11, 21] },
        { name: "Sagittarius", start: [11, 22], end: [12, 21] }
    ];

    for (const sign of zodiacDates) {
        const [startMonth, startDay] = sign.start;
        const [endMonth, endDay] = sign.end;

        if (
            (month === startMonth && day >= startDay) ||
            (month === endMonth && day <= endDay) ||
            (month > startMonth && month < endMonth)
        ) {
            return sign.name;
        }
    }
    return "Unknown";
}

// Zodiac Data Lookup
function getZodiacByName(name) {
    return zodiacData.find(z => z.name.toLowerCase() === name.toLowerCase()) || {};
}

// Compatibility Check
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
// Lucky Numbers Generator
function getLuckyNumbers() {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 90) + 1).join(', ');
}

// Fetch Historical Events
function fetchBirthEvents(month, day) {
    fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`)
        .then(res => res.ok ? res.json() : Promise.reject())
        .then(data => {
            const events = data.events.map(e => `<li>${e.year}: ${e.text}</li>`).join('');
            document.getElementById('historicalFacts').innerHTML = events || '<li>No events found.</li>';
        })
        .catch(() => {
            document.getElementById('historicalFacts').innerHTML = '<li>Failed to load historical facts.</li>';
        });
}

// Fetch Famous Births
function fetchFamousPeople(month, day) {
    fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`)
        .then(res => res.ok ? res.json() : Promise.reject())
        .then(data => {
            const people = data.births.map(p => `<li>${p.year}: ${p.text}</li>`).join('');
            document.getElementById('famousPeople').innerHTML = people || '<li>No famous people found.</li>';
        })
        .catch(() => {
            document.getElementById('famousPeople').innerHTML = '<li>Failed to load famous people.</li>';
        });
}

// Tarot Card Draw
function getRandomTarotCard() {
    return tarotCards[Math.floor(Math.random() * tarotCards.length)];
}

// Modal Close
function closeModal() {
    document.getElementById('resultModal').classList.add('hidden');
                            }
