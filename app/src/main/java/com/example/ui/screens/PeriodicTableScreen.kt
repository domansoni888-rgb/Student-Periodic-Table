package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.FilterList
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Search
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
import com.example.data.ElementCategory
import com.example.data.ElementDatabase
import com.example.ui.AppLanguage
import com.example.ui.Strings
import com.example.ui.components.ElementDetailDialog
import com.example.ui.components.ElementTile
import com.example.ui.components.LanthanideActinidePlaceholder

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PeriodicTableScreen(
    language: AppLanguage,
    onBack: () -> Unit,
    onNavigateToSearch: () -> Unit
) {
    var selectedCategory by remember { mutableStateOf<ElementCategory?>(null) }
    var selectedElement by remember { mutableStateOf<ChemicalElement?>(null) }
    var showLegendDialog by remember { mutableStateOf(false) }

    val horizontalScroll = rememberScrollState()
    val verticalScroll = rememberScrollState()

    val tileWidth = 66.dp
    val tileHeight = 74.dp
    val tileSpacing = 4.dp

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Column {
                        Text(
                            text = Strings.btnPeriodicTable(language),
                            style = MaterialTheme.typography.titleMedium,
                            fontWeight = FontWeight.Bold
                        )
                        Text(
                            text = if (language == AppLanguage.HINDI) "118 तत्व • स्क्रोल एवं ज़ूम समर्थित" else "118 Elements • Scrollable Grid",
                            style = MaterialTheme.typography.labelSmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                },
                navigationIcon = {
                    IconButton(onClick = onBack, modifier = Modifier.testTag("pt_back_button")) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = "Back to Home"
                        )
                    }
                },
                actions = {
                    IconButton(
                        onClick = { showLegendDialog = true },
                        modifier = Modifier.testTag("legend_toggle_button")
                    ) {
                        Icon(
                            imageVector = Icons.Default.Info,
                            contentDescription = "Color Legend"
                        )
                    }
                    IconButton(
                        onClick = onNavigateToSearch,
                        modifier = Modifier.testTag("pt_search_button")
                    ) {
                        Icon(
                            imageVector = Icons.Default.Search,
                            contentDescription = "Search"
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
        ) {
            // Category Filter Carousel
            LazyRow(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 6.dp),
                contentPadding = PaddingValues(horizontal = 12.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                item {
                    FilterChip(
                        selected = selectedCategory == null,
                        onClick = { selectedCategory = null },
                        label = { Text(Strings.filterAll(language), fontSize = 12.sp) },
                        modifier = Modifier.testTag("filter_chip_all")
                    )
                }

                items(ElementCategory.values()) { category ->
                    val isSelected = selectedCategory == category
                    val title = if (language == AppLanguage.HINDI) category.titleHi else category.titleEn

                    FilterChip(
                        selected = isSelected,
                        onClick = {
                            selectedCategory = if (isSelected) null else category
                        },
                        leadingIcon = {
                            Box(
                                modifier = Modifier
                                    .size(10.dp)
                                    .clip(CircleShape)
                                    .background(category.color)
                            )
                        },
                        label = { Text(title, fontSize = 12.sp) },
                        colors = FilterChipDefaults.filterChipColors(
                            selectedContainerColor = category.color.copy(alpha = 0.25f),
                            selectedLabelColor = MaterialTheme.colorScheme.onSurface
                        ),
                        modifier = Modifier.testTag("filter_chip_${category.name}")
                    )
                }
            }

            // Main Interactive Periodic Table Scrollable Canvas
            Box(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxWidth()
                    .verticalScroll(verticalScroll)
                    .horizontalScroll(horizontalScroll)
                    .padding(12.dp)
            ) {
                Column(
                    verticalArrangement = Arrangement.spacedBy(tileSpacing)
                ) {
                    // Column Group Numbers (1 to 18)
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(tileSpacing),
                        modifier = Modifier.padding(bottom = 2.dp)
                    ) {
                        // Corner spacer for period labels
                        Box(modifier = Modifier.size(width = 24.dp, height = 20.dp))

                        for (col in 1..18) {
                            Box(
                                modifier = Modifier.size(width = tileWidth, height = 20.dp),
                                contentAlignment = Alignment.Center
                            ) {
                                Text(
                                    text = "$col",
                                    style = MaterialTheme.typography.labelSmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                                    fontWeight = FontWeight.Bold
                                )
                            }
                        }
                    }

                    // Main 7 Periods (Rows 1 to 7)
                    for (row in 1..7) {
                        Row(
                            horizontalArrangement = Arrangement.spacedBy(tileSpacing),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            // Row Period Number
                            Box(
                                modifier = Modifier.size(width = 24.dp, height = tileHeight),
                                contentAlignment = Alignment.Center
                            ) {
                                Text(
                                    text = "$row",
                                    style = MaterialTheme.typography.labelMedium,
                                    color = MaterialTheme.colorScheme.primary,
                                    fontWeight = FontWeight.Black
                                )
                            }

                            for (col in 1..18) {
                                // Check for special placeholders at Row 6 Col 3 (La) and Row 7 Col 3 (Ac)
                                if (row == 6 && col == 3) {
                                    LanthanideActinidePlaceholder(
                                        label = if (language == AppLanguage.HINDI) "लैन्थेनाइड्स" else "Lanthanides",
                                        range = "57-71",
                                        color = ElementCategory.LANTHANIDE.color,
                                        tileWidth = tileWidth,
                                        tileHeight = tileHeight,
                                        onClick = { selectedCategory = ElementCategory.LANTHANIDE }
                                    )
                                } else if (row == 7 && col == 3) {
                                    LanthanideActinidePlaceholder(
                                        label = if (language == AppLanguage.HINDI) "ऐक्टिनाइड्स" else "Actinides",
                                        range = "89-103",
                                        color = ElementCategory.ACTINIDE.color,
                                        tileWidth = tileWidth,
                                        tileHeight = tileHeight,
                                        onClick = { selectedCategory = ElementCategory.ACTINIDE }
                                    )
                                } else {
                                    val element = ElementDatabase.allElements.find { it.tableRow == row && it.tableCol == col }
                                    if (element != null) {
                                        val isDimmed = selectedCategory != null && element.category != selectedCategory
                                        ElementTile(
                                            element = element,
                                            language = language,
                                            isDimmed = isDimmed,
                                            tileWidth = tileWidth,
                                            tileHeight = tileHeight,
                                            onClick = { selectedElement = element }
                                        )
                                    } else {
                                        // Empty cell in the periodic table
                                        Spacer(modifier = Modifier.size(width = tileWidth, height = tileHeight))
                                    }
                                }
                            }
                        }
                    }

                    // Spacer between Main Table and Lanthanides / Actinides
                    Spacer(modifier = Modifier.height(14.dp))

                    // Row 9: Lanthanides (57 to 71)
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(tileSpacing),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        // Series Label span (Cols 1..3 equivalent)
                        Box(
                            modifier = Modifier
                                .size(width = 24.dp + (tileWidth * 3) + (tileSpacing * 3), height = tileHeight)
                                .clip(RoundedCornerShape(8.dp))
                                .background(ElementCategory.LANTHANIDE.color.copy(alpha = 0.12f))
                                .border(1.dp, ElementCategory.LANTHANIDE.color, RoundedCornerShape(8.dp))
                                .padding(horizontal = 8.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = if (language == AppLanguage.HINDI) "* लैन्थेनाइड्स (57-71)" else "* Lanthanide Series (57-71)",
                                style = MaterialTheme.typography.labelSmall,
                                fontWeight = FontWeight.Bold,
                                color = ElementCategory.LANTHANIDE.color,
                                textAlign = TextAlign.Center
                            )
                        }

                        for (col in 4..18) {
                            val element = ElementDatabase.allElements.find { it.tableRow == 9 && it.tableCol == col }
                            if (element != null) {
                                val isDimmed = selectedCategory != null && element.category != selectedCategory
                                ElementTile(
                                    element = element,
                                    language = language,
                                    isDimmed = isDimmed,
                                    tileWidth = tileWidth,
                                    tileHeight = tileHeight,
                                    onClick = { selectedElement = element }
                                )
                            } else {
                                Spacer(modifier = Modifier.size(width = tileWidth, height = tileHeight))
                            }
                        }
                    }

                    // Row 10: Actinides (89 to 103)
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(tileSpacing),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        // Series Label span (Cols 1..3 equivalent)
                        Box(
                            modifier = Modifier
                                .size(width = 24.dp + (tileWidth * 3) + (tileSpacing * 3), height = tileHeight)
                                .clip(RoundedCornerShape(8.dp))
                                .background(ElementCategory.ACTINIDE.color.copy(alpha = 0.12f))
                                .border(1.dp, ElementCategory.ACTINIDE.color, RoundedCornerShape(8.dp))
                                .padding(horizontal = 8.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = if (language == AppLanguage.HINDI) "** ऐक्टिनाइड्स (89-103)" else "** Actinide Series (89-103)",
                                style = MaterialTheme.typography.labelSmall,
                                fontWeight = FontWeight.Bold,
                                color = ElementCategory.ACTINIDE.color,
                                textAlign = TextAlign.Center
                            )
                        }

                        for (col in 4..18) {
                            val element = ElementDatabase.allElements.find { it.tableRow == 10 && it.tableCol == col }
                            if (element != null) {
                                val isDimmed = selectedCategory != null && element.category != selectedCategory
                                ElementTile(
                                    element = element,
                                    language = language,
                                    isDimmed = isDimmed,
                                    tileWidth = tileWidth,
                                    tileHeight = tileHeight,
                                    onClick = { selectedElement = element }
                                )
                            } else {
                                Spacer(modifier = Modifier.size(width = tileWidth, height = tileHeight))
                            }
                        }
                    }
                }
            }
        }
    }

    // Color Legend Dialog
    if (showLegendDialog) {
        AlertDialog(
            onDismissRequest = { showLegendDialog = false },
            title = {
                Text(
                    text = Strings.colorLegend(language),
                    fontWeight = FontWeight.Bold
                )
            },
            text = {
                Column(
                    modifier = Modifier.verticalScroll(rememberScrollState()),
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    ElementCategory.values().forEach { cat ->
                        val count = ElementDatabase.getByCategory(cat).size
                        val catTitle = if (language == AppLanguage.HINDI) cat.titleHi else cat.titleEn
                        val catDesc = if (language == AppLanguage.HINDI) cat.descriptionHi else cat.descriptionEn

                        Surface(
                            modifier = Modifier
                                .fillMaxWidth()
                                .clickable {
                                    selectedCategory = cat
                                    showLegendDialog = false
                                },
                            shape = RoundedCornerShape(10.dp),
                            color = cat.color.copy(alpha = 0.12f),
                            border = androidx.compose.foundation.BorderStroke(1.dp, cat.color)
                        ) {
                            Row(
                                modifier = Modifier.padding(10.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Box(
                                    modifier = Modifier
                                        .size(16.dp)
                                        .clip(CircleShape)
                                        .background(cat.color)
                                )
                                Spacer(modifier = Modifier.width(10.dp))
                                Column(modifier = Modifier.weight(1f)) {
                                    Row(
                                        modifier = Modifier.fillMaxWidth(),
                                        horizontalArrangement = Arrangement.SpaceBetween
                                    ) {
                                        Text(
                                            text = catTitle,
                                            style = MaterialTheme.typography.titleSmall,
                                            fontWeight = FontWeight.Bold,
                                            color = MaterialTheme.colorScheme.onSurface
                                        )
                                        Text(
                                            text = "$count",
                                            style = MaterialTheme.typography.labelMedium,
                                            fontWeight = FontWeight.Bold,
                                            color = cat.color
                                        )
                                    }
                                    Text(
                                        text = catDesc,
                                        style = MaterialTheme.typography.bodySmall,
                                        color = MaterialTheme.colorScheme.onSurfaceVariant
                                    )
                                }
                            }
                        }
                    }
                }
            },
            confirmButton = {
                TextButton(onClick = { showLegendDialog = false }) {
                    Text(if (language == AppLanguage.HINDI) "बंद करें" else "Close")
                }
            }
        )
    }

    // Detail dialog when element is tapped
    selectedElement?.let { elem ->
        ElementDetailDialog(
            element = elem,
            language = language,
            onDismiss = { selectedElement = null },
            onSelectElement = { newElem -> selectedElement = newElem }
        )
    }
}
