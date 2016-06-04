exports.telugu = {
    //http://www.aczoom.com/itrans/html/tlgutx/node3.html

    "Independent_vowels": { // -()
        // Independent vowels
        "a"     :   "\u0C05", // అ TELUGU LETTER A
        "A"     :   "\u0C06", // ఆ TELUGU LETTER AA
        "aa"    :   "\u0C06", // ఆ TELUGU LETTER AA
        "i"     :   "\u0C07", // ఇ TELUGU LETTER I
        "I"     :   "\u0C08", // ఈ TELUGU LETTER II
        "ii"    :   "\u0C08", // ఈ TELUGU LETTER II
        "u"     :   "\u0C09", // ఉ TELUGU LETTER U
        "U"     :   "\u0C0A", // ఊ TELUGU LETTER UU
        "uu"    :   "\u0C0A", // ఊ TELUGU LETTER UU
        "R^i"   :   "\u0C0B", // ఋ TELUGU LETTER VOCALIC R
        "RRi"   :   "\u0C0B", // ఋ TELUGU LETTER VOCALIC R

        // Additional vowels for Sanskrit
        "R^I"   :   "\u0C60", // ౠ TELUGU LETTER VOCALIC RR
        "RRI"   :   "\u0C60", // ౠ TELUGU LETTER VOCALIC RR

        "L^i"   :   "\u0C0C", // ఌ TELUGU LETTER VOCALIC L
        "LLi"   :   "\u0C0C", // ఌ TELUGU LETTER VOCALIC L

        // Additional vowels for Sanskrit
        "L^I"   :   "\u0C61", // ౡ TELUGU LETTER VOCALIC LL
        "LLI"   :   "\u0C61", // ౡ TELUGU LETTER VOCALIC LL

        //""    :   "\u0C0D", // " <reserved>
        "e"     :   "\u0C0E", // ఎ TELUGU LETTER E
        "E"     :   "\u0C0F", // ఏ TELUGU LETTER EE
        "ee"    :   "\u0C0F", // ఏ TELUGU LETTER EE
        "ai"    :   "\u0C10", // ఐ TELUGU LETTER AI
        //""    :   "\u0C11", // " <reserved>
        "o"     :   "\u0C12", // ఒ TELUGU LETTER O
        "O"     :   "\u0C13", // ఓ TELUGU LETTER OO
        "oo"    :   "\u0C13", // ఓ TELUGU LETTER OO
        "au"    :   "\u0C14", // ఔ TELUGU LETTER AU

        // Sign: Manually added from Devanagari
        "OM"    :   "\u0950", // ॐ
        "ooM"   :   "\u0950", // ॐ
        "AUM"   :   "\u0950"  // ॐ
    },

    "Dependent_vowel": { // +()
        // Dependent vowel signs
        "a"     :   "",       // ADDED
        "A"     :   "\u0C3E", // ా  TELUGU VOWEL SIGN AA
        "aa"    :   "\u0C3E", // ా  TELUGU VOWEL SIGN AA
        "i"     :   "\u0C3F", // ి  TELUGU VOWEL SIGN I
        "I"     :   "\u0C40", // ీ  TELUGU VOWEL SIGN II
        "ii"    :   "\u0C40", // ీ  TELUGU VOWEL SIGN II
        "u"     :   "\u0C41", // ు  TELUGU VOWEL SIGN U
        "U"     :   "\u0C42", // ూ  TELUGU VOWEL SIGN UU
        "uu"    :   "\u0C42", // ూ  TELUGU VOWEL SIGN UU
        "R^i"   :   "\u0C43", // ృ  TELUGU VOWEL SIGN VOCALIC R
        "RRi"   :   "\u0C43", // ృ  TELUGU VOWEL SIGN VOCALIC R
        "R^I"   :   "\u0C44", // ౄ  TELUGU VOWEL SIGN VOCALIC RR
        "RRI"   :   "\u0C44", // ౄ  TELUGU VOWEL SIGN VOCALIC RR
        //""    :   "\u0C45", // " <reserved>
        "e"     :   "\u0C46", // ె  TELUGU VOWEL SIGN E
        "E"     :   "\u0C47", // ే  TELUGU VOWEL SIGN EE
        "ee"    :   "\u0C47", // ే  TELUGU VOWEL SIGN EE
        "ai"    :   "\u0C48", // ై  TELUGU VOWEL SIGN AI ≡ 0C46  $ె   0C56  $ౖ
        //""    :   "\u0C49", // " <reserved>
        "o"     :   "\u0C4A", // ొ  TELUGU VOWEL SIGN O
        "O"     :   "\u0C4B", // ో  TELUGU VOWEL SIGN OO
        "oo"    :   "\u0C4B", // ో  TELUGU VOWEL SIGN OO
        "au"    :   "\u0C4C", // ౌ  TELUGU VOWEL SIGN AU

        // Dependent vowels
        "L^i"   :   "\u0C62", // ౢ TELUGU VOWEL SIGN VOCALIC L
        "LLi"   :   "\u0C62", // ౢ TELUGU VOWEL SIGN VOCALIC L
        "L^I"   :   "\u0C63", // ౣ TELUGU VOWEL SIGN VOCALIC LL
        "LLI"   :   "\u0C63"  // ౣ TELUGU VOWEL SIGN VOCALIC LL
    },

    "Consonants": { // ()+
        // Consonants
        "k"     :   "\u0C15", // క TELUGU LETTER KA
        "kh"    :   "\u0C16", // ఖ TELUGU LETTER KHA
        "g"     :   "\u0C17", // గ TELUGU LETTER GA
        "gh"    :   "\u0C18", // ఘ TELUGU LETTER GHA
        "~N"    :   "\u0C19", // ఙ TELUGU LETTER NGA
        "N^"    :   "\u0C19", // ఙ TELUGU LETTER NGA
        "ch"    :   "\u0C1A", // చ TELUGU LETTER CA
        "Ch"    :   "\u0C1B", // ఛ TELUGU LETTER CHA
        "chh"   :   "\u0C1B", // ఛ TELUGU LETTER CHA
        "j"     :   "\u0C1C", // జ TELUGU LETTER JA
        "jh"    :   "\u0C1D", // ఝ TELUGU LETTER JHA
        "~n"    :   "\u0C1E", // ఞ TELUGU LETTER NYA
        "n^"    :   "\u0C1E", // ఞ TELUGU LETTER NYA
        "JN"    :   "\u0C1E", // ఞ TELUGU LETTER NYA
        "T"     :   "\u0C1F", // ట TELUGU LETTER TTA
        "Th"    :   "\u0C20", // ఠ TELUGU LETTER TTHA
        "D"     :   "\u0C21", // డ TELUGU LETTER DDA
        "Dh"    :   "\u0C22", // ఢ TELUGU LETTER DDHA
        "N"     :   "\u0C23", // ణ TELUGU LETTER NNA
        "t"     :   "\u0C24", // త TELUGU LETTER TA
        "th"    :   "\u0C25", // థ TELUGU LETTER THA
        "d"     :   "\u0C26", // ద TELUGU LETTER DA
        "dh"    :   "\u0C27", // ధ TELUGU LETTER DHA
        "n"     :   "\u0C28", // న TELUGU LETTER NA
        //""    :   "\u0C29", // " <reserved>
        "p"     :   "\u0C2A", // ప TELUGU LETTER PA
        "ph"    :   "\u0C2B", // ఫ TELUGU LETTER PHA
        "b"     :   "\u0C2C", // బ TELUGU LETTER BA
        "bh"    :   "\u0C2D", // భ TELUGU LETTER BHA
        "m"     :   "\u0C2E", // మ TELUGU LETTER MA
        "y"     :   "\u0C2F", // య TELUGU LETTER YA
        "r"     :   "\u0C30", // ర TELUGU LETTER RA
        "R"     :   "\u0C31", // ఱ TELUGU LETTER RRA
        "l"     :   "\u0C32", // ల TELUGU LETTER LA
        "L"     :   "\u0C33", // ళ TELUGU LETTER LLA
        //"ld"  :   "\u0C33", // ళ TELUGU LETTER LLA
        //""    :   "\u0C34", // " <reserved>
        "w"     :   "\u0C35", // వ TELUGU LETTER VA
        "v"     :   "\u0C35", // వ TELUGU LETTER VA
        "sh"    :   "\u0C36", // శ TELUGU LETTER SHA
        "Sh"    :   "\u0C37", // ష TELUGU LETTER SSA
        "shh"   :   "\u0C37", // ష TELUGU LETTER SSA
        "s"     :   "\u0C38", // స TELUGU LETTER SA
        "h"     :   "\u0C39", // హ TELUGU LETTER HA

        // Manually Added
        "x"     :   "\u0C15"+"\u0C4D"+"\u0C37", // క్ష == "kSh"
        "GY"    :   "\u0C1C"+"\u0C4D"+"\u0C1E"  // == "j~n"
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
        "\u0332":   "\u0332"  // $॒ STRESS SIGN ANUDATTA = Vedic tone anudatta
    },

    "Others": { // ()
        // Various signs
        ".N"    :   "\u0C01", // ఁ TELUGU SIGN CANDRABINDU
        ".m"    :   "\u0C02", // ం TELUGU SIGN ANUSVARA
        ".n"    :   "\u0C02", // ం TELUGU SIGN ANUSVARA
        "M"     :   "\u0C02", // ం TELUGU SIGN ANUSVARA
        "H"     :   "\u0C03", // ః TELUGU SIGN VISARGA
        // Addition for Sanskrit
        ".a"    :   "\u0C3D", // ఽ TELUGU SIGN AVAGRAHA
        ".h"    :   "\u0C4D", // TELUGU SIGN VIRAMA = halant (the preferred name)


        // Reserved For viram punctuation, use the generic Indic 0964 and 0965.
        //""    :   "\u0C64", // <reserved> → 0964 ।  devanagari danda
        //""    :   "\u0C65", // <reserved> → 0965 ॥  devanagari double danda

        // Digits
        "0"     :   "\u0C66", // ౦ TELUGU DIGIT ZERO
        "1"     :   "\u0C67", // ౧ TELUGU DIGIT ONE
        "2"     :   "\u0C68", // ౨ TELUGU DIGIT TWO
        "3"     :   "\u0C69", // ౩ TELUGU DIGIT THREE
        "4"     :   "\u0C6A", // ౪ TELUGU DIGIT FOUR
        "5"     :   "\u0C6B", // ౫ TELUGU DIGIT FIVE
        "6"     :   "\u0C6C", // ౬ TELUGU DIGIT SIX
        "7"     :   "\u0C6D", // ౭ TELUGU DIGIT SEVEN
        "8"     :   "\u0C6E", // ౮ TELUGU DIGIT EIGHT
        "9"     :   "\u0C6F", // ౯ TELUGU DIGIT NINE

        // Telugu fractions and weights
        //""    :   "\u0C78", // ౸ TELUGU FRACTION DIGIT ZERO FOR ODD POWERS OF FOUR
        //""    :   "\u0C79", // ౹ TELUGU FRACTION DIGIT ONE FOR ODD POWERS OF FOUR
        //""    :   "\u0C7A", // ౺ TELUGU FRACTION DIGIT TWO FOR ODD POWERS OF FOUR
        //""    :   "\u0C7B", // ౻ TELUGU FRACTION DIGIT THREE FOR ODD POWERS OF FOUR
        //""    :   "\u0C7C", // ౼ TELUGU FRACTION DIGIT ONE FOR EVEN POWERS OF FOUR
        //""    :   "\u0C7D", // ౽ TELUGU FRACTION DIGIT TWO FOR EVEN POWERS OF FOUR
        //""    :   "\u0C7E", // ౾ TELUGU FRACTION DIGIT THREE FOR EVEN POWERS OF FOUR
        //""    :   "\u0C7F", // ౿ TELUGU SIGN TUUMU

        // Various signs
        //""    :   "\u0C55", // ౕ  TELUGU LENGTH MARK
        //""    :   "\u0C56", // ౖ  TELUGU AI LENGTH MARK

        // Historic phonetic variants
        //""    :   "\u0C58", // ౘ TELUGU LETTER TSA
        //""    :   "\u0C59", // ౙ TELUGU LETTER DZA

        // Sign: Manually added from Devanagari
        ","     :   "\u0964", // । DEVANAGARI DANDA = purna viram • phrase separator
        "."     :   "\u0965"  // ॥ DEVANAGARI DOUBLE DANDA = deergh viram
    },

    // Virama
    "VIRAMA"    :   "\u0C4D"  // TELUGU SIGN VIRAMA = halant (the preferred name)
};