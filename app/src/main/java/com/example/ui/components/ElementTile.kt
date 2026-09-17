package com.example.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.ChemicalElement
import com.example.ui.AppLanguage

@Composable
fun ElementTile(
    element: ChemicalElement,
    language: AppLanguage,
    isDimmed: Boolean = false,
    tileWidth: Dp = 64.dp,
    tileHeight: Dp = 72.dp,
    onClick: () -> Unit
) {
    val categoryColor = element.category.color
    val displayName = if (language == AppLanguage.HINDI) element.nameHi else element.nameEn

    Box(
        modifier = Modifier
            .size(width = tileWidth, height = tileHeight)
            .alpha(if (isDimmed) 0.22f else 1.0f)
            .clip(RoundedCornerShape(8.dp))
            .background(categoryColor.copy(alpha = 0.20f))
            .border(
                width = if (isDimmed) 0.5.dp else 1.5.dp,
                color = categoryColor,
                shape = RoundedCornerShape(8.dp)
            )
            .clickable(onClick = onClick)
            .testTag("element_tile_${element.atomicNumber}"),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(2.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.SpaceBetween
        ) {
            // Top Row: Atomic Number
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 2.dp, vertical = 1.dp),
                horizontalArrangement = Arrangement.Start
            ) {
                Text(
                    text = "${element.atomicNumber}",
                    fontSize = 9.sp,
                    fontWeight = FontWeight.Bold,
                    color = categoryColor,
                    maxLines = 1
                )
            }

            // Center: Symbol
            Text(
                text = element.symbol,
                fontSize = 17.sp,
                fontWeight = FontWeight.Black,
                color = MaterialTheme.colorScheme.onSurface,
                maxLines = 1,
                textAlign = TextAlign.Center
            )

            // Name
            Text(
                text = displayName,
                fontSize = 8.5.sp,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
                textAlign = TextAlign.Center
            )

            // Bottom: Atomic Mass
            Text(
                text = element.atomicMass,
                fontSize = 8.sp,
                fontWeight = FontWeight.Normal,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                maxLines = 1,
                overflow = TextOverflow.Clip,
                textAlign = TextAlign.Center
            )
        }
    }
}

@Composable
fun LanthanideActinidePlaceholder(
    label: String,
    range: String,
    color: Color,
    tileWidth: Dp = 64.dp,
    tileHeight: Dp = 72.dp,
    onClick: () -> Unit
) {
    Box(
        modifier = Modifier
            .size(width = tileWidth, height = tileHeight)
            .clip(RoundedCornerShape(8.dp))
            .background(color.copy(alpha = 0.12f))
            .border(
                width = 1.5.dp,
                color = color,
                shape = RoundedCornerShape(8.dp)
            )
            .clickable(onClick = onClick),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier.padding(2.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                text = range,
                fontSize = 11.sp,
                fontWeight = FontWeight.Bold,
                color = color,
                textAlign = TextAlign.Center
            )
            Text(
                text = label,
                fontSize = 8.5.sp,
                fontWeight = FontWeight.SemiBold,
                color = MaterialTheme.colorScheme.onSurface,
                textAlign = TextAlign.Center,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}
