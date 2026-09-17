package com.example.ui

enum class AppLanguage(val displayName: String, val code: String) {
    ENGLISH("English", "en"),
    HINDI("हिन्दी (Hindi)", "hi")
}

enum class AppThemeMode(val titleEn: String, val titleHi: String) {
    SYSTEM("System Default", "सिस्टम डिफॉल्ट"),
    DARK("Dark Mode", "डार्क मोड"),
    LIGHT("Light Mode", "लाइट मोड")
}

object Strings {
    fun appTitle(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "STUDENT Periodic Table"
        AppLanguage.HINDI -> "STUDENT Periodic Table"
    }

    fun appSubtitle(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Explore All 118 Elements"
        AppLanguage.HINDI -> "सभी 118 तत्वों का अन्वेषण करें"
    }

    fun btnPeriodicTable(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Periodic Table"
        AppLanguage.HINDI -> "आवर्त सारणी"
    }

    fun btnSearch(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Search Element"
        AppLanguage.HINDI -> "तत्व खोजें"
    }

    fun btnCategories(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Element Categories"
        AppLanguage.HINDI -> "तत्व श्रेणियां"
    }

    fun btnQuiz(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Quiz"
        AppLanguage.HINDI -> "क्विज (प्रश्नोत्तरी)"
    }

    fun btnRandom(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Random Element"
        AppLanguage.HINDI -> "यादृच्छिक तत्व"
    }

    fun btnSettings(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Settings"
        AppLanguage.HINDI -> "सेटिंग्स"
    }

    fun credit(lang: AppLanguage) = "Made by Doman Soni"

    fun elementOfTheDay(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Element of the Day"
        AppLanguage.HINDI -> "आज का तत्व (Element of the Day)"
    }

    fun tapToExplore(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Tap to view full scientific profile"
        AppLanguage.HINDI -> "पूरा वैज्ञानिक विवरण देखने के लिए टैप करें"
    }

    fun quickStats(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "118 Elements • 18 Groups • 7 Periods • 10 Categories"
        AppLanguage.HINDI -> "118 तत्व • 18 समूह • 7 आवर्त • 10 श्रेणियां"
    }

    fun colorLegend(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Color Legend"
        AppLanguage.HINDI -> "रंग संकेत (Color Legend)"
    }

    fun searchPlaceholder(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Search by Name, Symbol, or Number (e.g. Gold / Au / 79)"
        AppLanguage.HINDI -> "नाम, प्रतीक या संख्या से खोजें (उदा: Gold / Au / 79)"
    }

    fun filterAll(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "All Categories"
        AppLanguage.HINDI -> "सभी श्रेणियां"
    }

    fun noResults(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "No elements match your search"
        AppLanguage.HINDI -> "आपकी खोज से कोई तत्व नहीं मिला"
    }

    // Detail field labels
    fun atomicNumber(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Atomic Number"
        AppLanguage.HINDI -> "परमाणु क्रमांक"
    }

    fun symbol(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Chemical Symbol"
        AppLanguage.HINDI -> "रासायनिक प्रतीक"
    }

    fun elementName(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Element Name"
        AppLanguage.HINDI -> "तत्व का नाम"
    }

    fun atomicMass(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Standard Atomic Mass"
        AppLanguage.HINDI -> "मानक परमाणु भार"
    }

    fun group(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Group"
        AppLanguage.HINDI -> "समूह (Group)"
    }

    fun period(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Period"
        AppLanguage.HINDI -> "आवर्त (Period)"
    }

    fun block(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Block"
        AppLanguage.HINDI -> "ब्लॉक (Block)"
    }

    fun category(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Category"
        AppLanguage.HINDI -> "श्रेणी"
    }

    fun electronConfig(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Electron Configuration"
        AppLanguage.HINDI -> "इलेक्ट्रॉनिक विन्यास"
    }

    fun phaseAtRoomTemp(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Phase at Room Temp"
        AppLanguage.HINDI -> "कमरे के ताप पर अवस्था"
    }

    fun meltingPoint(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Melting Point"
        AppLanguage.HINDI -> "गलनांक (Melting Point)"
    }

    fun boilingPoint(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Boiling Point"
        AppLanguage.HINDI -> "क्वथनांक (Boiling Point)"
    }

    fun density(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Density"
        AppLanguage.HINDI -> "घनत्व (Density)"
    }

    fun electronegativity(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Electronegativity"
        AppLanguage.HINDI -> "विद्युत-ऋणात्मकता (Pauling)"
    }

    fun oxidationStates(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Oxidation States"
        AppLanguage.HINDI -> "ऑक्सीकरण अवस्थाएं"
    }

    fun yearOfDiscovery(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Year of Discovery"
        AppLanguage.HINDI -> "खोज का वर्ष"
    }

    fun discoverer(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Discoverer"
        AppLanguage.HINDI -> "खोजकर्ता"
    }

    fun commonUses(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Common Practical Uses"
        AppLanguage.HINDI -> "सामान्य उपयोग (Uses)"
    }

    fun scientificOverview(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Scientific Overview"
        AppLanguage.HINDI -> "संक्षिप्त वैज्ञानिक जानकारी"
    }

    // Quiz strings
    fun quizTitle(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Chemistry Quiz"
        AppLanguage.HINDI -> "रसायन विज्ञान प्रश्नोत्तरी"
    }

    fun quizSubtitle(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Test your knowledge of all 118 elements"
        AppLanguage.HINDI -> "सभी 118 तत्वों पर अपने ज्ञान की परीक्षा लें"
    }

    fun quizModeAtomicNumber(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Atomic Number Quiz"
        AppLanguage.HINDI -> "परमाणु क्रमांक क्विज"
    }

    fun quizModeSymbol(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Symbol Quiz"
        AppLanguage.HINDI -> "रासायनिक प्रतीक क्विज"
    }

    fun quizModeName(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Element Name Quiz"
        AppLanguage.HINDI -> "तत्व नाम क्विज"
    }

    fun quizScore(lang: AppLanguage, score: Int, total: Int) = when (lang) {
        AppLanguage.ENGLISH -> "Score: $score / $total"
        AppLanguage.HINDI -> "स्कोर: $score / $total"
    }

    fun quizQuestionProgress(lang: AppLanguage, current: Int, total: Int) = when (lang) {
        AppLanguage.ENGLISH -> "Question $current of $total"
        AppLanguage.HINDI -> "प्रश्न $current / $total"
    }

    fun correctFeedback(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Correct! Well done!"
        AppLanguage.HINDI -> "बिल्कुल सही उत्तर!"
    }

    fun incorrectFeedback(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Incorrect!"
        AppLanguage.HINDI -> "गलत उत्तर!"
    }

    fun nextQuestion(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Next Question"
        AppLanguage.HINDI -> "अगला प्रश्न"
    }

    fun playAgain(lang: AppLanguage) = when (lang) {
        AppLanguage.ENGLISH -> "Play Again"
        AppLanguage.HINDI -> "पुनः खेलें"
    }
}
