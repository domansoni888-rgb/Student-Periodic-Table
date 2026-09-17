package com.example.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Science
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import com.example.data.ChemicalElement
import com.example.data.ElementCategory
import com.example.data.ElementDatabase
import com.example.ui.AppLanguage
import com.example.ui.Strings

@Composable
fun ElementDetailDialog(
    element: ChemicalElement,
    language: AppLanguage,
    onDismiss: () -> Unit,
    onSelectElement: (ChemicalElement) -> Unit
) {
    val categoryColor = element.category.color
    val categoryName = if (language == AppLanguage.HINDI) element.category.titleHi else element.category.titleEn

    Dialog(
        onDismissRequest = onDismiss,
        properties = DialogProperties(usePlatformDefaultWidth = false)
    ) {
        Card(
            modifier = Modifier
                .fillMaxWidth(0.95f)
                .fillMaxHeight(0.92f)
                .testTag("element_detail_dialog"),
            shape = RoundedCornerShape(24.dp),
            colors = CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.surface
            ),
            elevation = CardDefaults.cardElevation(defaultElevation = 8.dp)
        ) {
            Column(
                modifier = Modifier.fillMaxSize()
            ) {
                // Top Header with Category Color accent
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .background(categoryColor.copy(alpha = 0.15f))
                        .padding(horizontal = 16.dp, vertical = 12.dp)
                ) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Surface(
                            shape = RoundedCornerShape(12.dp),
                            color = categoryColor,
                            contentColor = Color.White
                        ) {
                            Text(
                                text = categoryName,
                                modifier = Modifier.padding(horizontal = 12.dp, vertical = 4.dp),
                                style = MaterialTheme.typography.labelMedium,
                                fontWeight = FontWeight.Bold
                            )
                        }

                        IconButton(
                            onClick = onDismiss,
                            modifier = Modifier.testTag("close_detail_button")
                        ) {
                            Icon(
                                imageVector = Icons.Default.Close,
                                contentDescription = "Close dialog"
                            )
                        }
                    }
                }

                // Scrollable Content
                Column(
                    modifier = Modifier
                        .weight(1f)
                        .verticalScroll(rememberScrollState())
                        .padding(horizontal = 20.dp, vertical = 12.dp)
                ) {
                    // Big Element Hero Tile
                    Surface(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(bottom = 16.dp),
                        shape = RoundedCornerShape(20.dp),
                        color = categoryColor.copy(alpha = 0.12f),
                        border = androidx.compose.foundation.BorderStroke(2.dp, categoryColor)
                    ) {
                        Column(
                            modifier = Modifier.padding(16.dp),
                            horizontalAlignment = Alignment.CenterHorizontally
                        ) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.Top
                            ) {
                                Text(
                                    text = "#${element.atomicNumber}",
                                    style = MaterialTheme.typography.titleMedium,
                                    fontWeight = FontWeight.Bold,
                                    color = categoryColor
                                )
                                Text(
                                    text = element.atomicMass,
                                    style = MaterialTheme.typography.titleMedium,
                                    fontWeight = FontWeight.Bold,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }

                            Spacer(modifier = Modifier.height(4.dp))

                            Text(
                                text = element.symbol,
                                style = MaterialTheme.typography.displayLarge.copy(
                                    fontSize = 64.sp,
                                    fontWeight = FontWeight.Black
                                ),
                                color = categoryColor
                            )

                            Text(
                                text = if (language == AppLanguage.HINDI) "${element.nameHi} (${element.nameEn})" else element.nameEn,
                                style = MaterialTheme.typography.headlineSmall,
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.onSurface
                            )

                            Spacer(modifier = Modifier.height(8.dp))

                            // Small pill row: Period, Group, Block, Phase
                            Row(
                                horizontalArrangement = Arrangement.spacedBy(8.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                BadgePill(text = "P: ${element.period}")
                                BadgePill(text = "G: ${if (element.group > 0) element.group else "—"}")
                                BadgePill(text = "Block: ${element.block}")
                                BadgePill(text = if (language == AppLanguage.HINDI) element.phase.titleHi else element.phase.titleEn)
                            }
                        }
                    }

                    // Section 1: Basic & Chemical Properties
                    SectionHeader(
                        title = if (language == AppLanguage.HINDI) "रासायनिक एवं भौतिक गुणधर्म" else "Chemical & Physical Properties"
                    )

                    PropertyRow(Strings.atomicNumber(language), "${element.atomicNumber}")
                    PropertyRow(Strings.symbol(language), element.symbol)
                    PropertyRow(Strings.atomicMass(language), element.atomicMass)
                    PropertyRow(Strings.category(language), categoryName)
                    PropertyRow(Strings.electronConfig(language), element.electronConfig, isMonospace = true)
                    PropertyRow(Strings.oxidationStates(language), element.oxidationStates)
                    PropertyRow(Strings.electronegativity(language), element.electronegativity)
                    PropertyRow(Strings.phaseAtRoomTemp(language), if (language == AppLanguage.HINDI) element.phase.titleHi else element.phase.titleEn)
                    PropertyRow(Strings.density(language), element.density)
                    PropertyRow(Strings.meltingPoint(language), element.meltingPoint)
                    PropertyRow(Strings.boilingPoint(language), element.boilingPoint)

                    Spacer(modifier = Modifier.height(16.dp))

                    // Section 2: History & Discovery
                    SectionHeader(
                        title = if (language == AppLanguage.HINDI) "खोज एवं इतिहास" else "History & Discovery"
                    )
                    PropertyRow(Strings.yearOfDiscovery(language), element.yearDiscovered)
                    PropertyRow(Strings.discoverer(language), element.discoverer)

                    Spacer(modifier = Modifier.height(16.dp))

                    // Section 3: Practical Uses
                    SectionCard(
                        title = Strings.commonUses(language),
                        text = if (language == AppLanguage.HINDI) element.usesHi else element.usesEn,
                        accentColor = categoryColor
                    )

                    Spacer(modifier = Modifier.height(12.dp))

                    // Section 4: Scientific Overview
                    SectionCard(
                        title = Strings.scientificOverview(language),
                        text = if (language == AppLanguage.HINDI) element.summaryHi else element.summaryEn,
                        accentColor = MaterialTheme.colorScheme.primary
                    )

                    Spacer(modifier = Modifier.height(16.dp))
                }

                // Bottom Bar with Prev / Next Navigation
                Surface(
                    modifier = Modifier.fillMaxWidth(),
                    tonalElevation = 4.dp
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 8.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        val prevNumber = if (element.atomicNumber > 1) element.atomicNumber - 1 else 118
                        val nextNumber = if (element.atomicNumber < 118) element.atomicNumber + 1 else 1

                        OutlinedButton(
                            onClick = {
                                ElementDatabase.getByAtomicNumber(prevNumber)?.let { onSelectElement(it) }
                            },
                            modifier = Modifier.testTag("prev_element_button")
                        ) {
                            Icon(
                                imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                                contentDescription = "Previous Element",
                                modifier = Modifier.size(18.dp)
                            )
                            Spacer(modifier = Modifier.width(4.dp))
                            Text(text = "#$prevNumber")
                        }

                        Text(
                            text = "${element.atomicNumber} / 118",
                            style = MaterialTheme.typography.bodyMedium,
                            fontWeight = FontWeight.SemiBold
                        )

                        Button(
                            onClick = {
                                ElementDatabase.getByAtomicNumber(nextNumber)?.let { onSelectElement(it) }
                            },
                            modifier = Modifier.testTag("next_element_button")
                        ) {
                            Text(text = "#$nextNumber")
                            Spacer(modifier = Modifier.width(4.dp))
                            Icon(
                                imageVector = Icons.AutoMirrored.Filled.ArrowForward,
                                contentDescription = "Next Element",
                                modifier = Modifier.size(18.dp)
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun BadgePill(text: String) {
    Surface(
        shape = RoundedCornerShape(8.dp),
        color = MaterialTheme.colorScheme.surfaceVariant,
        contentColor = MaterialTheme.colorScheme.onSurfaceVariant
    ) {
        Text(
            text = text,
            modifier = Modifier.padding(horizontal = 8.dp, vertical = 3.dp),
            style = MaterialTheme.typography.labelSmall,
            fontWeight = FontWeight.SemiBold
        )
    }
}

@Composable
private fun SectionHeader(title: String) {
    Text(
        text = title,
        style = MaterialTheme.typography.titleSmall,
        color = MaterialTheme.colorScheme.primary,
        fontWeight = FontWeight.Bold,
        modifier = Modifier.padding(vertical = 6.dp)
    )
    HorizontalDivider(
        modifier = Modifier.padding(bottom = 8.dp),
        color = MaterialTheme.colorScheme.outlineVariant
    )
}

@Composable
private fun PropertyRow(label: String, value: String, isMonospace: Boolean = false) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 4.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            text = label,
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
            text = value,
            style = if (isMonospace) {
                MaterialTheme.typography.bodyMedium.copy(fontFamily = FontFamily.Monospace, fontWeight = FontWeight.Bold)
            } else {
                MaterialTheme.typography.bodyMedium.copy(fontWeight = FontWeight.SemiBold)
            },
            color = MaterialTheme.colorScheme.onSurface
        )
    }
}

@Composable
private fun SectionCard(title: String, text: String, accentColor: Color) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(
            containerColor = accentColor.copy(alpha = 0.08f)
        ),
        border = androidx.compose.foundation.BorderStroke(1.dp, accentColor.copy(alpha = 0.3f))
    ) {
        Column(modifier = Modifier.padding(12.dp)) {
            Text(
                text = title,
                style = MaterialTheme.typography.titleSmall,
                fontWeight = FontWeight.Bold,
                color = accentColor
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = text,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurface
            )
        }
    }
}
