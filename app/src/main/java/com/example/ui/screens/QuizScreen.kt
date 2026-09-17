package com.example.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.ChemicalElement
import com.example.data.ElementDatabase
import com.example.ui.AppLanguage
import com.example.ui.Strings
import kotlin.random.Random

enum class QuizMode {
    ATOMIC_NUMBER,
    SYMBOL,
    ELEMENT_NAME
}

data class QuizQuestion(
    val targetElement: ChemicalElement,
    val questionText: String,
    val options: List<String>,
    val correctOptionIndex: Int,
    val explanation: String
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun QuizScreen(
    language: AppLanguage,
    onBack: () -> Unit
) {
    var selectedMode by remember { mutableStateOf(QuizMode.ATOMIC_NUMBER) }
    var currentQuestionIndex by remember { mutableStateOf(0) }
    var score by remember { mutableStateOf(0) }
    var streak by remember { mutableStateOf(0) }
    var selectedAnswerIndex by remember { mutableStateOf<Int?>(null) }
    var isAnswerSubmitted by remember { mutableStateOf(false) }
    val totalQuestions = 10

    // Question generator helper
    fun generateQuestion(mode: QuizMode, lang: AppLanguage): QuizQuestion {
        val target = ElementDatabase.getRandomElement()
        val all = ElementDatabase.allElements.filter { it.atomicNumber != target.atomicNumber }.shuffled()
        val distractors = all.take(3)

        val targetName = if (lang == AppLanguage.HINDI) target.nameHi else target.nameEn

        return when (mode) {
            QuizMode.ATOMIC_NUMBER -> {
                val correctVal = "${target.atomicNumber}"
                val wrongVals = distractors.map { "${it.atomicNumber}" }
                val options = (wrongVals + correctVal).shuffled()
                QuizQuestion(
                    targetElement = target,
                    questionText = if (lang == AppLanguage.HINDI)
                        "तत्व '$targetName' (${target.symbol}) का परमाणु क्रमांक (Atomic Number) क्या है?"
                    else
                        "What is the Atomic Number of '$targetName' (${target.symbol})?",
                    options = options,
                    correctOptionIndex = options.indexOf(correctVal),
                    explanation = if (lang == AppLanguage.HINDI)
                        "${target.nameHi} (#${target.atomicNumber}) आवर्त ${target.period}, समूह ${if (target.group > 0) target.group else "—"} का सदस्य है।"
                    else
                        "${target.nameEn} (#${target.atomicNumber}) belongs to Period ${target.period}, Group ${if (target.group > 0) target.group else "—"}."
                )
            }
            QuizMode.SYMBOL -> {
                val correctVal = target.symbol
                val wrongVals = distractors.map { it.symbol }
                val options = (wrongVals + correctVal).shuffled()
                QuizQuestion(
                    targetElement = target,
                    questionText = if (lang == AppLanguage.HINDI)
                        "तत्व '$targetName' (#${target.atomicNumber}) का रासायनिक प्रतीक (Symbol) क्या है?"
                    else
                        "What is the chemical symbol for '$targetName' (#${target.atomicNumber})?",
                    options = options,
                    correctOptionIndex = options.indexOf(correctVal),
                    explanation = if (lang == AppLanguage.HINDI)
                        "${target.nameHi} का प्रतीक '${target.symbol}' है। परमाणु भार: ${target.atomicMass}"
                    else
                        "The symbol for ${target.nameEn} is '${target.symbol}'. Atomic weight: ${target.atomicMass}"
                )
            }
            QuizMode.ELEMENT_NAME -> {
                val correctVal = if (lang == AppLanguage.HINDI) target.nameHi else target.nameEn
                val wrongVals = distractors.map { if (lang == AppLanguage.HINDI) it.nameHi else it.nameEn }
                val options = (wrongVals + correctVal).shuffled()
                QuizQuestion(
                    targetElement = target,
                    questionText = if (lang == AppLanguage.HINDI)
                        "प्रतीक '${target.symbol}' (परमाणु संख्या ${target.atomicNumber}) किस तत्व का है?"
                    else
                        "Which element has symbol '${target.symbol}' and atomic number ${target.atomicNumber}?",
                    options = options,
                    correctOptionIndex = options.indexOf(correctVal),
                    explanation = if (lang == AppLanguage.HINDI)
                        "${target.symbol} का अर्थ ${target.nameHi} (${target.nameEn}) है।"
                    else
                        "${target.symbol} corresponds to ${target.nameEn} (Atomic Mass: ${target.atomicMass})."
                )
            }
        }
    }

    var currentQuestion by remember(selectedMode, language, currentQuestionIndex) {
        mutableStateOf(generateQuestion(selectedMode, language))
    }

    fun resetQuiz() {
        currentQuestionIndex = 0
        score = 0
        streak = 0
        selectedAnswerIndex = null
        isAnswerSubmitted = false
        currentQuestion = generateQuestion(selectedMode, language)
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = Strings.quizTitle(language),
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold
                    )
                },
                navigationIcon = {
                    IconButton(onClick = onBack, modifier = Modifier.testTag("quiz_back_button")) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = "Back"
                        )
                    }
                },
                actions = {
                    IconButton(onClick = { resetQuiz() }, modifier = Modifier.testTag("quiz_reset_button")) {
                        Icon(imageVector = Icons.Default.Refresh, contentDescription = "Restart Quiz")
                    }
                }
            )
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // Mode Selector Tabs
            TabRow(
                selectedTabIndex = selectedMode.ordinal,
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(12.dp))
            ) {
                Tab(
                    selected = selectedMode == QuizMode.ATOMIC_NUMBER,
                    onClick = {
                        selectedMode = QuizMode.ATOMIC_NUMBER
                        resetQuiz()
                    },
                    text = {
                        Text(
                            text = if (language == AppLanguage.HINDI) "परमाणु #" else "Number #",
                            style = MaterialTheme.typography.labelMedium
                        )
                    }
                )
                Tab(
                    selected = selectedMode == QuizMode.SYMBOL,
                    onClick = {
                        selectedMode = QuizMode.SYMBOL
                        resetQuiz()
                    },
                    text = {
                        Text(
                            text = if (language == AppLanguage.HINDI) "प्रतीक" else "Symbol",
                            style = MaterialTheme.typography.labelMedium
                        )
                    }
                )
                Tab(
                    selected = selectedMode == QuizMode.ELEMENT_NAME,
                    onClick = {
                        selectedMode = QuizMode.ELEMENT_NAME
                        resetQuiz()
                    },
                    text = {
                        Text(
                            text = if (language == AppLanguage.HINDI) "नाम" else "Name",
                            style = MaterialTheme.typography.labelMedium
                        )
                    }
                )
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Score & Streak Tracker Bar
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Surface(
                    shape = RoundedCornerShape(10.dp),
                    color = MaterialTheme.colorScheme.primaryContainer
                ) {
                    Text(
                        text = Strings.quizScore(language, score, totalQuestions),
                        modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp),
                        style = MaterialTheme.typography.titleSmall,
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.onPrimaryContainer
                    )
                }

                Surface(
                    shape = RoundedCornerShape(10.dp),
                    color = MaterialTheme.colorScheme.tertiaryContainer
                ) {
                    Text(
                        text = if (language == AppLanguage.HINDI) "लगातार सही: $streak 🔥" else "Streak: $streak 🔥",
                        modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp),
                        style = MaterialTheme.typography.titleSmall,
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.onTertiaryContainer
                    )
                }
            }

            Spacer(modifier = Modifier.height(12.dp))

            // Progress Bar
            LinearProgressIndicator(
                progress = { (currentQuestionIndex + 1).toFloat() / totalQuestions },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(8.dp)
                    .clip(RoundedCornerShape(4.dp))
            )

            Spacer(modifier = Modifier.height(20.dp))

            if (currentQuestionIndex >= totalQuestions) {
                // Quiz Completed Screen
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(20.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant)
                ) {
                    Column(
                        modifier = Modifier.padding(24.dp),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Text(
                            text = if (language == AppLanguage.HINDI) "🎉 क्विज पूर्ण!" else "🎉 Quiz Completed!",
                            style = MaterialTheme.typography.headlineMedium,
                            fontWeight = FontWeight.Bold
                        )
                        Spacer(modifier = Modifier.height(12.dp))
                        Text(
                            text = if (language == AppLanguage.HINDI)
                                "आपका अंतिम स्कोर: $score / $totalQuestions"
                            else
                                "Your Final Score: $score / $totalQuestions",
                            style = MaterialTheme.typography.titleLarge,
                            fontWeight = FontWeight.SemiBold,
                            color = MaterialTheme.colorScheme.primary
                        )
                        Spacer(modifier = Modifier.height(8.dp))
                        Text(
                            text = if (score >= 8) {
                                if (language == AppLanguage.HINDI) "उत्कृष्ट प्रदर्शन! आप रसायन विज्ञान के माहिर हैं।" else "Outstanding! You are a chemistry master."
                            } else if (score >= 5) {
                                if (language == AppLanguage.HINDI) "अच्छा प्रयास! थोड़ा और अभ्यास करें।" else "Good job! Keep practicing to score higher."
                            } else {
                                if (language == AppLanguage.HINDI) "आवर्त सारणी का पुनः अध्ययन करें और पुनः प्रयास करें।" else "Review the periodic table and try again."
                            },
                            style = MaterialTheme.typography.bodyMedium,
                            textAlign = TextAlign.Center
                        )
                        Spacer(modifier = Modifier.height(20.dp))
                        Button(
                            onClick = { resetQuiz() },
                            modifier = Modifier.testTag("play_again_button")
                        ) {
                            Text(Strings.playAgain(language))
                        }
                    }
                }
            } else {
                // Active Question Card
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(20.dp),
                    colors = CardDefaults.cardColors(
                        containerColor = currentQuestion.targetElement.category.color.copy(alpha = 0.12f)
                    ),
                    border = androidx.compose.foundation.BorderStroke(1.5.dp, currentQuestion.targetElement.category.color.copy(alpha = 0.4f))
                ) {
                    Column(
                        modifier = Modifier.padding(20.dp),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Text(
                            text = Strings.quizQuestionProgress(language, currentQuestionIndex + 1, totalQuestions),
                            style = MaterialTheme.typography.labelMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )

                        Spacer(modifier = Modifier.height(12.dp))

                        Text(
                            text = currentQuestion.questionText,
                            style = MaterialTheme.typography.titleMedium,
                            fontWeight = FontWeight.Bold,
                            textAlign = TextAlign.Center
                        )

                        Spacer(modifier = Modifier.height(20.dp))

                        // 4 Option Buttons
                        currentQuestion.options.forEachIndexed { index, optionText ->
                            val isSelected = selectedAnswerIndex == index
                            val isCorrect = index == currentQuestion.correctOptionIndex

                            val containerColor = when {
                                !isAnswerSubmitted -> {
                                    if (isSelected) MaterialTheme.colorScheme.primaryContainer else MaterialTheme.colorScheme.surface
                                }
                                isCorrect -> Color(0xFF2E7D32).copy(alpha = 0.2f)
                                isSelected -> Color(0xFFC62828).copy(alpha = 0.2f)
                                else -> MaterialTheme.colorScheme.surface
                            }

                            val borderColor = when {
                                !isAnswerSubmitted -> {
                                    if (isSelected) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.outlineVariant
                                }
                                isCorrect -> Color(0xFF2E7D32)
                                isSelected -> Color(0xFFC62828)
                                else -> MaterialTheme.colorScheme.outlineVariant
                            }

                            Surface(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .padding(vertical = 5.dp)
                                    .clickable(enabled = !isAnswerSubmitted) {
                                        selectedAnswerIndex = index
                                        isAnswerSubmitted = true
                                        if (isCorrect) {
                                            score++
                                            streak++
                                        } else {
                                            streak = 0
                                        }
                                    }
                                    .testTag("quiz_option_$index"),
                                shape = RoundedCornerShape(12.dp),
                                color = containerColor,
                                border = androidx.compose.foundation.BorderStroke(1.5.dp, borderColor)
                            ) {
                                Row(
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .padding(horizontal = 16.dp, vertical = 14.dp),
                                    verticalAlignment = Alignment.CenterVertically,
                                    horizontalArrangement = Arrangement.SpaceBetween
                                ) {
                                    Text(
                                        text = optionText,
                                        style = MaterialTheme.typography.bodyLarge,
                                        fontWeight = FontWeight.SemiBold
                                    )

                                    if (isAnswerSubmitted) {
                                        if (isCorrect) {
                                            Icon(
                                                imageVector = Icons.Default.Check,
                                                contentDescription = "Correct",
                                                tint = Color(0xFF2E7D32)
                                            )
                                        } else if (isSelected) {
                                            Icon(
                                                imageVector = Icons.Default.Close,
                                                contentDescription = "Incorrect",
                                                tint = Color(0xFFC62828)
                                            )
                                        }
                                    }
                                }
                            }
                        }

                        // Feedback & Explanation
                        AnimatedVisibility(visible = isAnswerSubmitted) {
                            Column(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .padding(top = 16.dp),
                                horizontalAlignment = Alignment.CenterHorizontally
                            ) {
                                val userWasCorrect = selectedAnswerIndex == currentQuestion.correctOptionIndex
                                Text(
                                    text = if (userWasCorrect) Strings.correctFeedback(language) else Strings.incorrectFeedback(language),
                                    style = MaterialTheme.typography.titleSmall,
                                    fontWeight = FontWeight.Bold,
                                    color = if (userWasCorrect) Color(0xFF2E7D32) else Color(0xFFC62828)
                                )

                                Spacer(modifier = Modifier.height(6.dp))

                                Text(
                                    text = currentQuestion.explanation,
                                    style = MaterialTheme.typography.bodyMedium,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                                    textAlign = TextAlign.Center
                                )

                                Spacer(modifier = Modifier.height(16.dp))

                                Button(
                                    onClick = {
                                        currentQuestionIndex++
                                        selectedAnswerIndex = null
                                        isAnswerSubmitted = false
                                        if (currentQuestionIndex < totalQuestions) {
                                            currentQuestion = generateQuestion(selectedMode, language)
                                        }
                                    },
                                    modifier = Modifier
                                        .fillMaxWidth(0.7f)
                                        .testTag("quiz_next_button")
                                ) {
                                    Text(Strings.nextQuestion(language))
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
