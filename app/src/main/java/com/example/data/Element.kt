package com.example.data

import androidx.compose.ui.graphics.Color

enum class ElementCategory(
    val titleEn: String,
    val titleHi: String,
    val color: Color,
    val descriptionEn: String,
    val descriptionHi: String
) {
    ALKALI_METAL(
        titleEn = "Alkali Metals",
        titleHi = "क्षार धातुएं",
        color = Color(0xFFEF4444), // Crimson Red
        descriptionEn = "Highly reactive metals with one valence electron; soft and low melting points.",
        descriptionHi = "अत्यधिक अभिक्रियाशील धातुएं जिनमें एक वैलेंस इलेक्ट्रॉन होता है; कोमल और कम गलनांक।"
    ),
    ALKALINE_EARTH_METAL(
        titleEn = "Alkaline Earth Metals",
        titleHi = "क्षारीय मृदा धातुएं",
        color = Color(0xFFF97316), // Orange
        descriptionEn = "Reactive, electropositive, divalent metals forming basic oxides.",
        descriptionHi = "अभिक्रियाशील, द्विसंयोजी धातुएं जो क्षारीय ऑक्साइड बनाती हैं।"
    ),
    TRANSITION_METAL(
        titleEn = "Transition Metals",
        titleHi = "संक्रमण धातुएं",
        color = Color(0xFF0284C7), // Sky / Cyan-Blue
        descriptionEn = "D-block metals characterized by multiple oxidation states and catalytic properties.",
        descriptionHi = "डी-ब्लॉक धातुएं जिनमें विभिन्न ऑक्सीकरण अवस्थाएं और उत्प्रेरक गुण होते हैं।"
    ),
    POST_TRANSITION_METAL(
        titleEn = "Post-transition Metals",
        titleHi = "उत्तर-संक्रमण धातुएं",
        color = Color(0xFF6366F1), // Indigo
        descriptionEn = "Metals located between transition metals and metalloids with softer mechanical traits.",
        descriptionHi = "संक्रमण धातुओं और उपधातुओं के बीच स्थित धातुएं जो तुलनात्मक रूप से कोमल होती हैं।"
    ),
    METALLOID(
        titleEn = "Metalloids",
        titleHi = "उपधातुएं",
        color = Color(0xFF10B981), // Emerald Green
        descriptionEn = "Elements with chemical and physical properties intermediate between metals and nonmetals.",
        descriptionHi = "ऐसे तत्व जिनके गुण धातुओं और अधातुओं के बीच के होते हैं, जैसे सिलिकॉन।"
    ),
    NONMETAL(
        titleEn = "Nonmetals",
        titleHi = "अधातुएं",
        color = Color(0xFF84CC16), // Lime Green
        descriptionEn = "Electronegative elements that readily gain electrons; essential building blocks of life.",
        descriptionHi = "ऋणविद्युती तत्व जो इलेक्ट्रॉन ग्रहण करते हैं; जीवन के मूलभूत निर्माण खंड।"
    ),
    HALOGEN(
        titleEn = "Halogens",
        titleHi = "हैलोजन",
        color = Color(0xFFEAB308), // Amber / Gold
        descriptionEn = "Highly reactive group 17 nonmetals that form salts when combined with metals.",
        descriptionHi = "समूह 17 के अत्यधिक अभिक्रियाशील अधातु जो धातुओं के साथ लवण (salts) बनाते हैं।"
    ),
    NOBLE_GAS(
        titleEn = "Noble Gases",
        titleHi = "उत्कृष्ट गैसें",
        color = Color(0xFFA855F7), // Purple / Violet
        descriptionEn = "Inert, odorless, colorless gases with full outer valence electron shells.",
        descriptionHi = "अक्रिय, गंधहीन, रंगहीन गैसें जिनकी बाहरी कक्षा पूर्ण रूप से भरी होती है।"
    ),
    LANTHANIDE(
        titleEn = "Lanthanides",
        titleHi = "लैन्थेनाइड्स",
        color = Color(0xFFEC4899), // Pink
        descriptionEn = "Rare earth f-block elements (atomic numbers 57 to 71) vital for electronics and magnets.",
        descriptionHi = "दुर्लभ मृदा एफ-ब्लॉक तत्व (परमाणु क्रमांक 57 से 71) जो इलेक्ट्रॉनिक्स में अत्यंत उपयोगी हैं।"
    ),
    ACTINIDE(
        titleEn = "Actinides",
        titleHi = "ऐक्टिनाइड्स",
        color = Color(0xFFD946EF), // Fuchsia / Magenta
        descriptionEn = "Heavy radioactive f-block elements (atomic numbers 89 to 103) utilized in nuclear energy.",
        descriptionHi = "भारी रेडियोधर्मी एफ-ब्लॉक तत्व (परमाणु क्रमांक 89 से 103) जिनका उपयोग नाभिकीय ऊर्जा में होता है।"
    )
}

enum class ElementPhase(
    val titleEn: String,
    val titleHi: String
) {
    SOLID("Solid", "ठोस"),
    LIQUID("Liquid", "तरल"),
    GAS("Gas", "गैस"),
    UNKNOWN("Unknown", "अज्ञात")
}

data class ChemicalElement(
    val atomicNumber: Int,
    val symbol: String,
    val nameEn: String,
    val nameHi: String,
    val atomicMass: String,
    val group: Int,          // 1..18 (or 3 for Lanthanides/Actinides)
    val period: Int,         // 1..7
    val block: String,       // s, p, d, f
    val category: ElementCategory,
    val electronConfig: String,
    val phase: ElementPhase,
    val meltingPoint: String,
    val boilingPoint: String,
    val density: String,
    val electronegativity: String,
    val oxidationStates: String,
    val yearDiscovered: String,
    val discoverer: String,
    val usesEn: String,
    val usesHi: String,
    val summaryEn: String,
    val summaryHi: String,
    val tableRow: Int,       // 1..7 for main, 9 for Lanthanides, 10 for Actinides
    val tableCol: Int        // 1..18
)
