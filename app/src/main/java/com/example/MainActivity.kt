package com.example

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.animation.Crossfade
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Surface
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import com.example.ui.AppLanguage
import com.example.ui.AppThemeMode
import com.example.ui.screens.*
import com.example.ui.theme.MyApplicationTheme

enum class AppScreen {
    HOME,
    PERIODIC_TABLE,
    SEARCH,
    CATEGORIES,
    QUIZ,
    SETTINGS
}

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            var currentScreen by remember { mutableStateOf(AppScreen.HOME) }
            var currentLanguage by remember { mutableStateOf(AppLanguage.ENGLISH) }
            var currentThemeMode by remember { mutableStateOf(AppThemeMode.SYSTEM) }

            // Handle system back button when not on Home screen
            BackHandler(enabled = currentScreen != AppScreen.HOME) {
                currentScreen = AppScreen.HOME
            }

            MyApplicationTheme(themeMode = currentThemeMode) {
                Surface(modifier = Modifier.fillMaxSize()) {
                    Crossfade(targetState = currentScreen, label = "ScreenTransition") { screen ->
                        when (screen) {
                            AppScreen.HOME -> HomeScreen(
                                language = currentLanguage,
                                onNavigateToPeriodicTable = { currentScreen = AppScreen.PERIODIC_TABLE },
                                onNavigateToSearch = { currentScreen = AppScreen.SEARCH },
                                onNavigateToCategories = { currentScreen = AppScreen.CATEGORIES },
                                onNavigateToQuiz = { currentScreen = AppScreen.QUIZ },
                                onNavigateToSettings = { currentScreen = AppScreen.SETTINGS }
                            )
                            AppScreen.PERIODIC_TABLE -> PeriodicTableScreen(
                                language = currentLanguage,
                                onBack = { currentScreen = AppScreen.HOME },
                                onNavigateToSearch = { currentScreen = AppScreen.SEARCH }
                            )
                            AppScreen.SEARCH -> SearchScreen(
                                language = currentLanguage,
                                onBack = { currentScreen = AppScreen.HOME }
                            )
                            AppScreen.CATEGORIES -> CategoriesScreen(
                                language = currentLanguage,
                                onBack = { currentScreen = AppScreen.HOME }
                            )
                            AppScreen.QUIZ -> QuizScreen(
                                language = currentLanguage,
                                onBack = { currentScreen = AppScreen.HOME }
                            )
                            AppScreen.SETTINGS -> SettingsScreen(
                                language = currentLanguage,
                                onLanguageChange = { currentLanguage = it },
                                themeMode = currentThemeMode,
                                onThemeModeChange = { currentThemeMode = it },
                                onBack = { currentScreen = AppScreen.HOME }
                            )
                        }
                    }
                }
            }
        }
    }
}
