package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Category
import androidx.compose.material.icons.filled.GridOn
import androidx.compose.material.icons.filled.Language
import androidx.compose.material.icons.filled.Quiz
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material.icons.filled.Shuffle
import androidx.compose.material.icons.filled.WbSunny
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.ChemicalElement
import com.example.data.ElementDatabase
import com.example.ui.AppLanguage
import com.example.ui.Strings
import com.example.ui.components.ElementDetailDialog

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(
    language: AppLanguage,
    onNavigateToPeriodicTable: () -> Unit,
    onNavigateToSearch: () -> Unit,
    onNavigateToCategories: () -> Unit,
    onNavigateToQuiz: () -> Unit,
    onNavigateToSettings: () -> Unit
) {
    var selectedElement by remember { mutableStateOf<ChemicalElement?>(null) }
    val elementOfTheDay = remember { ElementDatabase.getElementOfTheDay() }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Surface(
                            modifier = Modifier.size(36.dp),
                            shape = RoundedCornerShape(8.dp),
                            color = MaterialTheme.colorScheme.primary,
                            contentColor = MaterialTheme.colorScheme.onPrimary
                        ) {
                            Box(contentAlignment = Alignment.Center) {
                                Text(
                                    text = "Pt",
                                    fontSize = 18.sp,
                                    fontWeight = FontWeight.Black
                                )
                            }
                        }
                        Column {
                            Text(
                                text = Strings.appTitle(language),
                                style = MaterialTheme.typography.titleMedium,
                                fontWeight = FontWeight.Bold
                            )
                            Text(
                                text = Strings.appSubtitle(language),
                                style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                },
                actions = {
                    IconButton(
                        onClick = onNavigateToSettings,
                        modifier = Modifier.testTag("home_settings_button")
                    ) {
                        Icon(
                            imageVector = Icons.Default.Settings,
                            contentDescription = "Settings"
                        )
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
                .padding(horizontal = 16.dp, vertical = 8.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // "Element of the Day" Featured Card
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .clickable { selectedElement = elementOfTheDay }
                    .testTag("element_of_the_day_card"),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(
                    containerColor = elementOfTheDay.category.color.copy(alpha = 0.12f)
                ),
                border = androidx.compose.foundation.BorderStroke(1.5.dp, elementOfTheDay.category.color.copy(alpha = 0.5f))
            ) {
                Column(
                    modifier = Modifier.padding(16.dp)
                ) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(6.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Default.WbSunny,
                                contentDescription = null,
                                tint = elementOfTheDay.category.color,
                                modifier = Modifier.size(20.dp)
                            )
                            Text(
                                text = Strings.elementOfTheDay(language),
                                style = MaterialTheme.typography.titleSmall,
                                fontWeight = FontWeight.Bold,
                                color = elementOfTheDay.category.color
                            )
                        }

                        Surface(
                            shape = RoundedCornerShape(8.dp),
                            color = elementOfTheDay.category.color,
                            contentColor = Color.White
                        ) {
                            Text(
                                text = "#${elementOfTheDay.atomicNumber}",
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 2.dp),
                                style = MaterialTheme.typography.labelSmall,
                                fontWeight = FontWeight.Bold
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Surface(
                            modifier = Modifier.size(54.dp),
                            shape = RoundedCornerShape(12.dp),
                            color = elementOfTheDay.category.color.copy(alpha = 0.25f),
                            border = androidx.compose.foundation.BorderStroke(1.5.dp, elementOfTheDay.category.color)
                        ) {
                            Box(contentAlignment = Alignment.Center) {
                                Text(
                                    text = elementOfTheDay.symbol,
                                    fontSize = 22.sp,
                                    fontWeight = FontWeight.Black,
                                    color = MaterialTheme.colorScheme.onSurface
                                )
                            }
                        }

                        Spacer(modifier = Modifier.width(14.dp))

                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                text = if (language == AppLanguage.HINDI) elementOfTheDay.nameHi else elementOfTheDay.nameEn,
                                style = MaterialTheme.typography.titleMedium,
                                fontWeight = FontWeight.Bold
                            )
                            Text(
                                text = if (language == AppLanguage.HINDI) elementOfTheDay.category.titleHi else elementOfTheDay.category.titleEn,
                                style = MaterialTheme.typography.bodySmall,
                                color = elementOfTheDay.category.color,
                                fontWeight = FontWeight.SemiBold
                            )
                            Text(
                                text = Strings.tapToExplore(language),
                                style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Quick Stats Bar
            Surface(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp),
                color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
            ) {
                Text(
                    text = Strings.quickStats(language),
                    modifier = Modifier.padding(horizontal = 12.dp, vertical = 8.dp),
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    textAlign = TextAlign.Center
                )
            }

            Spacer(modifier = Modifier.height(16.dp))

            // The 6 requested action buttons arranged in a clean 2-column grid
            Column(
                modifier = Modifier.fillMaxWidth(),
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                // Row 1: 1. Periodic Table & 2. Search Element
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    MenuActionCard(
                        title = Strings.btnPeriodicTable(language),
                        subtitle = if (language == AppLanguage.HINDI) "118 तत्वों का ग्रिड" else "118 Elements Grid",
                        icon = Icons.Default.GridOn,
                        color = Color(0xFF1E88E5),
                        modifier = Modifier
                            .weight(1f)
                            .testTag("home_btn_periodic_table"),
                        onClick = onNavigateToPeriodicTable
                    )

                    MenuActionCard(
                        title = Strings.btnSearch(language),
                        subtitle = if (language == AppLanguage.HINDI) "नाम, प्रतीक, संख्या" else "Name, Symbol, No.",
                        icon = Icons.Default.Search,
                        color = Color(0xFF00897B),
                        modifier = Modifier
                            .weight(1f)
                            .testTag("home_btn_search"),
                        onClick = onNavigateToSearch
                    )
                }

                // Row 2: 3. Element Categories & 4. Quiz
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    MenuActionCard(
                        title = Strings.btnCategories(language),
                        subtitle = if (language == AppLanguage.HINDI) "10 रासायनिक श्रेणियां" else "10 Chemical Groups",
                        icon = Icons.Default.Category,
                        color = Color(0xFF8E24AA),
                        modifier = Modifier
                            .weight(1f)
                            .testTag("home_btn_categories"),
                        onClick = onNavigateToCategories
                    )

                    MenuActionCard(
                        title = Strings.btnQuiz(language),
                        subtitle = if (language == AppLanguage.HINDI) "3 प्रश्नोत्तरी मोड" else "3 Game Modes",
                        icon = Icons.Default.Quiz,
                        color = Color(0xFFE53935),
                        modifier = Modifier
                            .weight(1f)
                            .testTag("home_btn_quiz"),
                        onClick = onNavigateToQuiz
                    )
                }

                // Row 3: 5. Random Element & 6. Settings
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    MenuActionCard(
                        title = Strings.btnRandom(language),
                        subtitle = if (language == AppLanguage.HINDI) "तत्व एक्सप्लोर करें" else "Surprise Discovery",
                        icon = Icons.Default.Shuffle,
                        color = Color(0xFFF4511E),
                        modifier = Modifier
                            .weight(1f)
                            .testTag("home_btn_random"),
                        onClick = {
                            selectedElement = ElementDatabase.getRandomElement()
                        }
                    )

                    MenuActionCard(
                        title = Strings.btnSettings(language),
                        subtitle = if (language == AppLanguage.HINDI) "भाषा और थीम" else "Language & Theme",
                        icon = Icons.Default.Settings,
                        color = Color(0xFF546E7A),
                        modifier = Modifier
                            .weight(1f)
                            .testTag("home_btn_settings"),
                        onClick = onNavigateToSettings
                    )
                }
            }

            Spacer(modifier = Modifier.height(24.dp))

            // Mandatory Credit at bottom: Made by Doman Soni
            Surface(
                shape = RoundedCornerShape(12.dp),
                color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.35f),
                border = androidx.compose.foundation.BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant)
            ) {
                Row(
                    modifier = Modifier
                        .padding(horizontal = 16.dp, vertical = 8.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Box(
                        modifier = Modifier
                            .size(8.dp)
                            .clip(CircleShape)
                            .background(MaterialTheme.colorScheme.primary)
                    )
                    Text(
                        text = Strings.credit(language),
                        style = MaterialTheme.typography.bodyMedium,
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                }
            }

            Spacer(modifier = Modifier.height(16.dp))
        }
    }

    selectedElement?.let { elem ->
        ElementDetailDialog(
            element = elem,
            language = language,
            onDismiss = { selectedElement = null },
            onSelectElement = { newElem -> selectedElement = newElem }
        )
    }
}

@Composable
private fun MenuActionCard(
    title: String,
    subtitle: String,
    icon: ImageVector,
    color: Color,
    modifier: Modifier = Modifier,
    onClick: () -> Unit
) {
    Card(
        modifier = modifier
            .height(110.dp)
            .clickable(onClick = onClick),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = color.copy(alpha = 0.10f)
        ),
        border = androidx.compose.foundation.BorderStroke(1.5.dp, color.copy(alpha = 0.35f))
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(14.dp),
            verticalArrangement = Arrangement.SpaceBetween,
            horizontalAlignment = Alignment.Start
        ) {
            Surface(
                shape = RoundedCornerShape(10.dp),
                color = color,
                contentColor = Color.White,
                modifier = Modifier.size(34.dp)
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Icon(
                        imageVector = icon,
                        contentDescription = null,
                        modifier = Modifier.size(20.dp)
                    )
                }
            }

            Column {
                Text(
                    text = title,
                    style = MaterialTheme.typography.titleSmall,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.onSurface,
                    maxLines = 1
                )
                Text(
                    text = subtitle,
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    maxLines = 1
                )
            }
        }
    }
}
