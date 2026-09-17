package com.example.data

import java.util.Calendar
import kotlin.random.Random

object ElementDatabase {
    val allElements: List<ChemicalElement> = 
        (ElementsPart1.list + ElementsPart2.list + ElementsPart3.list).sortedBy { it.atomicNumber }

    init {
        require(allElements.size == 118) { "Expected 118 elements but got ${allElements.size}" }
    }

    fun getByAtomicNumber(atomicNumber: Int): ChemicalElement? {
        if (atomicNumber in 1..118) {
            return allElements[atomicNumber - 1]
        }
        return allElements.find { it.atomicNumber == atomicNumber }
    }

    fun getBySymbol(symbol: String): ChemicalElement? {
        return allElements.find { it.symbol.equals(symbol.trim(), ignoreCase = true) }
    }

    fun search(query: String, category: ElementCategory? = null): List<ChemicalElement> {
        val trimmed = query.trim()
        val numericQuery = trimmed.toIntOrNull()

        return allElements.filter { element ->
            val matchesCategory = category == null || element.category == category
            val matchesQuery = when {
                trimmed.isEmpty() -> true
                numericQuery != null -> element.atomicNumber == numericQuery
                else -> {
                    element.symbol.contains(trimmed, ignoreCase = true) ||
                    element.nameEn.contains(trimmed, ignoreCase = true) ||
                    element.nameHi.contains(trimmed, ignoreCase = true)
                }
            }
            matchesCategory && matchesQuery
        }
    }

    fun getByCategory(category: ElementCategory): List<ChemicalElement> {
        return allElements.filter { it.category == category }
    }

    fun getRandomElement(): ChemicalElement {
        return allElements[Random.nextInt(allElements.size)]
    }

    fun getElementOfTheDay(): ChemicalElement {
        val cal = Calendar.getInstance()
        val dayOfYear = cal.get(Calendar.DAY_OF_YEAR)
        val year = cal.get(Calendar.YEAR)
        val index = (dayOfYear * 37 + year) % allElements.size
        return allElements[index]
    }
}
