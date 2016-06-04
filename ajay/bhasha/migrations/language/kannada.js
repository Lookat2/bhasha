exports.kannada = {
    // http://www.aczoom.com/itrans/html/kantex/node2.html

    "Independent_vowels": { // -()
        // Independent vowels
        "a"     :   "\u0C85", // ಅ KANNADA LETTER A
        "A"     :   "\u0C86", // ಆ KANNADA LETTER AA
        "aa"    :   "\u0C86", // ಆ KANNADA LETTER AA
        "i"     :   "\u0C87", // ಇ KANNADA LETTER I
        "I"     :   "\u0C88", // ಈ KANNADA LETTER II
        "ii"    :   "\u0C88", // ಈ KANNADA LETTER II
        "u"     :   "\u0C89", // ಉ KANNADA LETTER U
        "U"     :   "\u0C8A", // ಊ KANNADA LETTER UU
        "uu"    :   "\u0C8A", // ಊ KANNADA LETTER UU
        "R^i"   :   "\u0C8B", // ಋ KANNADA LETTER VOCALIC R
        "RRi"   :   "\u0C8B", // ಋ KANNADA LETTER VOCALIC R
        "L^i"   :   "\u0C8C", // ಌ KANNADA LETTER VOCALIC L
        "LLi"   :   "\u0C8C", // ಌ KANNADA LETTER VOCALIC L
        //""    :   "\u0C8D", // " <reserved>
        "e"     :   "\u0C8E", // ಎ KANNADA LETTER E
        "E"     :   "\u0C8F", // ಏ KANNADA LETTER EE
        "ee"    :   "\u0C8F", // ಏ KANNADA LETTER EE
        "ai"    :   "\u0C90", // ಐ KANNADA LETTER AI
        //""    :   "\u0C91", // " <reserved>
        "o"     :   "\u0C92", // ಒ KANNADA LETTER O
        "O"     :   "\u0C93", // ಓ KANNADA LETTER OO
        "oo"    :   "\u0C93", // ಓ KANNADA LETTER OO
        "au"    :   "\u0C94", // ಔ KANNADA LETTER AU

        // Additional vowels for Sanskrit
        "R^I"   :   "\u0CE0", // ೠ KANNADA LETTER VOCALIC RR
        "RRI"   :   "\u0CE0", // ೠ KANNADA LETTER VOCALIC RR
        "L^I"   :   "\u0CE1", // ೡ KANNADA LETTER VOCALIC LL
        "LLI"   :   "\u0CE1", // ೡ KANNADA LETTER VOCALIC LL

        // Sign: Manually added from Devanagari
        "OM"    :   "\u0950", // ॐ
        "ooM"   :   "\u0950", // ॐ
        "AUM"   :   "\u0950"  // ॐ
    },

    "Dependent_vowel": { // +()
        // Dependent vowel signs
        "a"     :   "",       // ADDED
        "A"     :   "\u0CBE", // $ಾ KANNADA VOWEL SIGN AA
        "aa"    :   "\u0CBE", // $ಾ KANNADA VOWEL SIGN AA
        "i"     :   "\u0CBF", // $ಿ KANNADA VOWEL SIGN I
        "I"     :   "\u0CC0", // $ೀ KANNADA VOWEL SIGN II ≡ 0CBF $ಿ  0CD5 $ೕ
        "ii"    :   "\u0CC0", // $ೀ KANNADA VOWEL SIGN II ≡ 0CBF $ಿ  0CD5 $ೕ
        "u"     :   "\u0CC1", // $ು KANNADA VOWEL SIGN U
        "U"     :   "\u0CC2", // $ೂ KANNADA VOWEL SIGN UU
        "uu"    :   "\u0CC2", // $ೂ KANNADA VOWEL SIGN UU
        "R^i"   :   "\u0CC3", // $ೃ KANNADA VOWEL SIGN VOCALIC R
        "RRi"   :   "\u0CC3", // $ೃ KANNADA VOWEL SIGN VOCALIC R
        "R^I"   :   "\u0CC4", // $ೄ KANNADA VOWEL SIGN VOCALIC RR
        "RRI"   :   "\u0CC4", // $ೄ KANNADA VOWEL SIGN VOCALIC RR
        //""    :   "\u0CC5", // " <reserved>
        "e"     :   "\u0CC6", // $ೆ KANNADA VOWEL SIGN E
        "E"     :   "\u0CC7", // $ೇ KANNADA VOWEL SIGN EE ≡ 0CC6 $ೆ   0CD5 $ೕ
        "ee"    :   "\u0CC7", // $ೇ KANNADA VOWEL SIGN EE ≡ 0CC6 $ೆ   0CD5 $ೕ
        "ai"    :   "\u0CC8", // $ೈ KANNADA VOWEL SIGN AI ≡ 0CC6 $ೆ   0CD6 $ೖ
        //""    :   "\u0CC9", // " <reserved>
        "o"     :   "\u0CCA", // $ೊ KANNADA VOWEL SIGN O ≡ 0CC6 $ೆ   0CC2 $ೂ
        "O"     :   "\u0CCB", // $ೋ KANNADA VOWEL SIGN OO ≡ 0CCA $ೊ  0CD5 $ೕ
        "oo"    :   "\u0CCB", // $ೋ KANNADA VOWEL SIGN OO ≡ 0CCA $ೊ  0CD5 $ೕ
        "au"    :   "\u0CCC", // $ೌ KANNADA VOWEL SIGN AU

        // Dependent vowels
        "L^i"   :   "\u0CE2", // ೢ KANNADA VOWEL SIGN VOCALIC L
        "LLi"   :   "\u0CE2", // ೢ KANNADA VOWEL SIGN VOCALIC L
        "L^I"   :   "\u0CE3", // ೣ KANNADA VOWEL SIGN VOCALIC LL
        "LLI"   :   "\u0CE3"  // ೣ KANNADA VOWEL SIGN VOCALIC LL
    },

    "Consonants": { // ()+
        // Consonants
        "k"     :   "\u0C95", // ಕ KANNADA LETTER KA
        "kh"    :   "\u0C96", // ಖ KANNADA LETTER KHA
        "g"     :   "\u0C97", // ಗ KANNADA LETTER GA
        "gh"    :   "\u0C98", // ಘ KANNADA LETTER GHA
        "~N"    :   "\u0C99", // ಙ KANNADA LETTER NGA
        "N^"    :   "\u0C99", // ಙ KANNADA LETTER NGA
        "ch"    :   "\u0C9A", // ಚ KANNADA LETTER CA
        "Ch"    :   "\u0C9B", // ಛ KANNADA LETTER CHA
        "chh"   :   "\u0C9B", // ಛ KANNADA LETTER CHA
        "j"     :   "\u0C9C", // ಜ KANNADA LETTER JA
        "jh"    :   "\u0C9D", // ಝ KANNADA LETTER JHA
        "~n"    :   "\u0C9E", // ಞ KANNADA LETTER NYA
        "n^"    :   "\u0C9E", // ಞ KANNADA LETTER NYA
        "JN"    :   "\u0C9E", // ಞ KANNADA LETTER NYA
        "T"     :   "\u0C9F", // ಟ KANNADA LETTER TTA
        "Th"    :   "\u0CA0", // ಠ KANNADA LETTER TTHA
        "D"     :   "\u0CA1", // ಡ KANNADA LETTER DDA
        "Dh"    :   "\u0CA2", // ಢ KANNADA LETTER DDHA
        "N"     :   "\u0CA3", // ಣ KANNADA LETTER NNA
        "t"     :   "\u0CA4", // ತ KANNADA LETTER TA
        "th"    :   "\u0CA5", // ಥ KANNADA LETTER THA
        "d"     :   "\u0CA6", // ದ KANNADA LETTER DA
        "dh"    :   "\u0CA7", // ಧ KANNADA LETTER DHA
        "n"     :   "\u0CA8", // ನ KANNADA LETTER NA
        //""    :   "\u0CA9", // " <reserved>
        "p"     :   "\u0CAA", // ಪ KANNADA LETTER PA
        "ph"    :   "\u0CAB", // ಫ KANNADA LETTER PHA
        "b"     :   "\u0CAC", // ಬ KANNADA LETTER BA
        "bh"    :   "\u0CAD", // ಭ KANNADA LETTER BHA
        "m"     :   "\u0CAE", // ಮ KANNADA LETTER MA
        "y"     :   "\u0CAF", // ಯ KANNADA LETTER YA
        "r"     :   "\u0CB0", // ರ KANNADA LETTER RA
        "R"     :   "\u0CB1", // ಱ KANNADA LETTER RRA
        "l"     :   "\u0CB2", // ಲ KANNADA LETTER LA
        "L"     :   "\u0CB3", // ಳ KANNADA LETTER LLA
        //"ld"  :   "\u0CB3", // ಳ KANNADA LETTER LLA
        //""    :   "\u0CB4", // " <reserved>
        "w"     :   "\u0CB5", // ವ KANNADA LETTER VA
        "v"     :   "\u0CB5", // ವ KANNADA LETTER VA
        "sh"    :   "\u0CB6", // ಶ KANNADA LETTER SHA
        "Sh"    :   "\u0CB7", // ಷ KANNADA LETTER SSA
        "shh"   :   "\u0CB7", // ಷ KANNADA LETTER SSA
        "s"     :   "\u0CB8", // ಸ KANNADA LETTER SA
        "h"     :   "\u0CB9", // ಹ KANNADA LETTER HA

        // Manually Added
        "x"     :   "\u0C95"+"\u0CCD"+"\u0CB7", // క్ష == "kSh"
        "GY"    :   "\u0C9C"+"\u0CCD"+"\u0C9E"  // == "j~n"
    },

    "Accent_marks": {
        "\u200B":   "\u200B", // ZERO WIDTH SPACE (ZWSP)
        "\u200D":   "\u200D", // ZERO WIDTH JOINER (ZWJ)
        // Hack to handle accent marks, if used in Indian scripts or if language specific accent marks does not exist
        "\u0300":   "\u0300", // $॓ GRAVE ACCENT → 0300 $̀   combining grave accent
        "\u0301":   "\u0301", // $॔ ACUTE ACCENT → 0301 $́   combining acute accent
        "\u0307":   "\u0307", // ॱ SIGN HIGH SPACING DOT
        "\u030A":   "\u030A", // ॰ ABBREVIATION SIGN • intended for Devanagari-specific abbreviations
        "\u030D":   "\u030D", // $॑ STRESS SIGN UDATTA = Vedic tone svarita
        "\u0323":   "\u0323", // $़ SIGN NUKTA • for extending the alphabet to new letters
        "\u0332":   "\u0332", // $॒ STRESS SIGN ANUDATTA = Vedic tone anudatta

        // Various signs
        "\u0323":   "\u0CBC"  // $಼ KANNADA SIGN NUKTA
    },

    "Others": { // ()
        // Various signs
        ".m"    :   "\u0C82", // $ಂ KANNADA SIGN ANUSVARA
        ".n"    :   "\u0C82", // $ಂ KANNADA SIGN ANUSVARA
        "M"     :   "\u0C82", // $ಂ KANNADA SIGN ANUSVARA
        "H"     :   "\u0C83", // $ಃ KANNADA SIGN VISARGA
        ".a"    :   "\u0CBD", // ಽ KANNADA SIGN AVAGRAHA
        ".h"    :   "\u0CCD", // $ KANNADA SIGN VIRAMA • preferred name is halant

        // Various signs
        //""    :   "\u0CD5", // $ೕ KANNADA LENGTH MARK
        //""    :   "\u0CD6", // $ೖ KANNADA AI LENGTH MARK

        // Additional consonants
        //""    :   "\u0CDE", // ೞ KANNADA LETTER FA ※ KANNADA LETTER LLLA • obsolete historic letter • name is a mistake for LLLA

        // Reserved
        // For viram punctuation, use the generic Indic 0964 and 0965.
        //""    :   "\u0CE4", // " <reserved> → 0964 ।  devanagari danda
        //""    :   "\u0CE5", // " <reserved> → 0965 ॥  devanagari double danda

        // Digits
        "0"     :   "\u0CE6", // ೦ KANNADA DIGIT ZERO
        "1"     :   "\u0CE7", // ೧ KANNADA DIGIT ONE
        "2"     :   "\u0CE8", // ೨ KANNADA DIGIT TWO
        "3"     :   "\u0CE9", // ೩ KANNADA DIGIT THREE
        "4"     :   "\u0CEA", // ೪ KANNADA DIGIT FOUR
        "5"     :   "\u0CEB", // ೫ KANNADA DIGIT FIVE
        "6"     :   "\u0CEC", // ೬ KANNADA DIGIT SIX
        "7"     :   "\u0CED", // ೭ KANNADA DIGIT SEVEN
        "8"     :   "\u0CEE", // ೮ KANNADA DIGIT EIGHT
        "9"     :   "\u0CEF", // ೯ KANNADA DIGIT NINE

        // Signs used in Sanskrit
        //""    :   "\u0CF1", // ೱ KANNADA SIGN JIHVAMULIYA → 1CF5 ᳵ  vedic sign jihvamuliya
        //""    :   "\u0CF2", // ೲ KANNADA SIGN UPADHMANIYA → 1CF6 ᳶ  vedic sign upadhmaniya

        // Sign: Manually added from Devanagari
        ","     :   "\u0964", // । DEVANAGARI DANDA = purna viram • phrase separator
        "."     :   "\u0965"  // ॥ DEVANAGARI DOUBLE DANDA = deergh viram
    },

    // Virama
    "VIRAMA"    :   "\u0CCD" // $ KANNADA SIGN VIRAMA • preferred name is halant
};