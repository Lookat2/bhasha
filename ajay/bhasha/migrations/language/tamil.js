exports.tamil = {
    // http://www.aczoom.com/itrans/html/tamil/node5.html

    "Independent_vowels": { // -()
        // Independent vowels
        "a"     :   "\u0B85", // அ TAMIL LETTER A
        "A"     :   "\u0B86", // ஆ TAMIL LETTER AA
        "aa"    :   "\u0B86", // ஆ TAMIL LETTER AA
        "i"     :   "\u0B87", // இ TAMIL LETTER I
        "I"     :   "\u0B88", // ஈ TAMIL LETTER II
        "ii"    :   "\u0B88", // ஈ TAMIL LETTER II
        "u"     :   "\u0B89", // உ TAMIL LETTER U
        "U"     :   "\u0B8A", // ஊ TAMIL LETTER UU
        "uu"    :   "\u0B8A", // ஊ TAMIL LETTER UU
        //""    :   "\u0B8B", // " <reserved>
        //""    :   "\u0B8C", // " <reserved>
        //""    :   "\u0B8D", // " <reserved>
        "e"     :   "\u0B8E", // எ TAMIL LETTER E
        "E"     :   "\u0B8F", // ஏ TAMIL LETTER EE
        "ee"    :   "\u0B8F", // ஏ TAMIL LETTER EE
        "ai"    :   "\u0B90", // ஐ TAMIL LETTER AI
        //""    :   "\u0B91", // " <reserved>
        "o"     :   "\u0B92", // ஒ TAMIL LETTER O
        "O"     :   "\u0B93", // ஓ TAMIL LETTER OO
        "oo"    :   "\u0B93", // ஓ TAMIL LETTER OO
        "au"    :   "\u0B94", // ஔ TAMIL LETTER AU ≡ 0B92 ஒ   0BD7 $ௗ

        // Various signs
        "AUM"   :   "\u0950", // ADDED DEVANAGARI ॐ for reverse conversion, if used 
        "OM"    :   "\u0BD0", // ௐ TAMIL OM
        "ooM"   :   "\u0BD0", // ௐ TAMIL OM
        "AUM"   :   "\u0BD0"  // ௐ TAMIL OM
    },

    "Dependent_vowel": { // +()
        // Dependent vowel signs
        "a"     :   "",       // ADDED
        "A"     :   "\u0BBE", // $ா TAMIL VOWEL SIGN AA
        "aa"    :   "\u0BBE", // $ா TAMIL VOWEL SIGN AA
        "i"     :   "\u0BBF", // $ி TAMIL VOWEL SIGN I
        "I"     :   "\u0BC0", // $ீ TAMIL VOWEL SIGN II
        "ii"    :   "\u0BC0", // $ீ TAMIL VOWEL SIGN II
        "u"     :   "\u0BC1", // $ு TAMIL VOWEL SIGN U
        "U"     :   "\u0BC2", // $ூ TAMIL VOWEL SIGN UU
        "uu"    :   "\u0BC2", // $ூ TAMIL VOWEL SIGN UU
        //""    :   "\u0BC3", // " <reserved>
        //""    :   "\u0BC4", // " <reserved>
        //""    :   "\u0BC5", // " <reserved>
        "e"     :   "\u0BC6", // $ெ TAMIL VOWEL SIGN E • stands to the left of the consonant
        "E"     :   "\u0BC7", // $ே TAMIL VOWEL SIGN EE • stands to the left of the consonant
        "ee"    :   "\u0BC7", // $ே TAMIL VOWEL SIGN EE • stands to the left of the consonant
        "ai"    :   "\u0BC8", // $ை TAMIL VOWEL SIGN AI • stands to the left of the consonant

        // Two-part dependent vowel signs
        // These vowel signs have glyph pieces which stand on both sides of the consonant; they follow the consonant in logical order, and should be handled as a unit for most processing.
        "o"     :   "\u0BCA", // $ொ TAMIL VOWEL SIGN O ≡ 0BC6   $ெ   0BBE $ா
        "O"     :   "\u0BCB", // $ோ TAMIL VOWEL SIGN OO ≡ 0BC7   $ே   0BBE $ா
        "oo"    :   "\u0BCB", // $ோ TAMIL VOWEL SIGN OO ≡ 0BC7   $ே   0BBE $ா
        "au"    :   "\u0BCC"  // $ௌ TAMIL VOWEL SIGN AU ≡ 0BC6   $ெ   0BD7 $ௗ
    },

    "Consonants": { // ()+
        // Consonants
        "kh"    :   "\u0B95", // க TAMIL LETTER KA ** Manual Change ***
        "g"     :   "\u0B95", // க TAMIL LETTER KA ** Manual Change ***
        "gh"    :   "\u0B95", // க TAMIL LETTER KA ** Manual Change ***
        "k"     :   "\u0B95", // க TAMIL LETTER KA
        //""    :   "\u0B96", // " <reserved>
        //""    :   "\u0B97", // " <reserved>
        //""    :   "\u0B98", // " <reserved>
        "~N"    :   "\u0B99", // ங TAMIL LETTER NGA
        "N^"    :   "\u0B99", // ங TAMIL LETTER NGA
        "Ch"    :   "\u0B9A", // ச TAMIL LETTER CA ** Manual Change ***
        "chh"   :   "\u0B9A", // ச TAMIL LETTER CA ** Manual Change ***
        "ch"    :   "\u0B9A", // ச TAMIL LETTER CA
        //""    :   "\u0B9B", // " <reserved>
        "jh"    :   "\u0B9C", // ஜ TAMIL LETTER JA ** Manual Change ***
        "j"     :   "\u0B9C", // ஜ TAMIL LETTER JA
        //""    :   "\u0B9D", // " <reserved>
        "~n"    :   "\u0B9E", // ஞ TAMIL LETTER NYA
        "n^"    :   "\u0B9E", // ஞ TAMIL LETTER NYA
        "JN"    :   "\u0B9E", // ஞ TAMIL LETTER NYA
        "Th"    :   "\u0B9F", // ட TAMIL LETTER TTA ** Manual Change ***
        "D"     :   "\u0B9F", // ட TAMIL LETTER TTA ** Manual Change ***
        "Dh"    :   "\u0B9F", // ட TAMIL LETTER TTA ** Manual Change ***
        "T"     :   "\u0B9F", // ட TAMIL LETTER TTA
        //""    :   "\u0BA0", // " <reserved>
        //""    :   "\u0BA1", // " <reserved>
        //""    :   "\u0BA2", // " <reserved>
        "N"     :   "\u0BA3", // ண TAMIL LETTER NNA
        "th"    :   "\u0BA4", // த TAMIL LETTER TA ** Manual Change ***
        "d"     :   "\u0BA4", // த TAMIL LETTER TA ** Manual Change ***
        "dh"    :   "\u0BA4", // த TAMIL LETTER TA ** Manual Change ***
        "t"     :   "\u0BA4", // த TAMIL LETTER TA
        //""    :   "\u0BA5", // " <reserved>
        //""    :   "\u0BA6", // " <reserved>
        //""    :   "\u0BA7", // " <reserved>
        "n"     :   "\u0BA8", // ந TAMIL LETTER NA
        "^n"    :   "\u0BA9", // ன TAMIL LETTER NNNA
        "ph"    :   "\u0BAA", // ப TAMIL LETTER PA ** Manual Change ***
        "b"     :   "\u0BAA", // ப TAMIL LETTER PA ** Manual Change ***
        "bh"    :   "\u0BAA", // ப TAMIL LETTER PA ** Manual Change ***
        "p"     :   "\u0BAA", // ப TAMIL LETTER PA
        //""    :   "\u0BAB", // " <reserved>
        //""    :   "\u0BAC", // " <reserved>
        //""    :   "\u0BAD", // " <reserved>
        "m"     :   "\u0BAE", // ம TAMIL LETTER MA
        "y"     :   "\u0BAF", // ய TAMIL LETTER YA
        "r"     :   "\u0BB0", // ர TAMIL LETTER RA
        "R"     :   "\u0BB1", // ற TAMIL LETTER RRA
        "l"     :   "\u0BB2", // ல TAMIL LETTER LA
        "L"     :   "\u0BB3", // ள TAMIL LETTER LLA
        //"ld"  :   "\u0BB3", // ள TAMIL LETTER LLA
        //""    :   "\u0BB4", // ழ TAMIL LETTER LLLA
        "w"     :   "\u0BB5", // வ TAMIL LETTER VA
        "v"     :   "\u0BB5", // வ TAMIL LETTER VA
        "sh"    :   "\u0BB6", // ஶ TAMIL LETTER SHA
        "Sh"    :   "\u0BB7", // ஷ TAMIL LETTER SSA
        "shh"   :   "\u0BB7", // ஷ TAMIL LETTER SSA
        "s"     :   "\u0BB8", // ஸ TAMIL LETTER SA
        "h"     :   "\u0BB9", // ஹ TAMIL LETTER HA

        // Manually Added
        "x"     :   "\u0B95"+"\u0BCD"+"\u0BB7", // క్ష == "kSh"
        "GY"    :   "\u0B9C"+"\u0BCD"+"\u0B9E"  // == "j~n"
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
        // The anusvara should not be confused with the use of a circular glyph for the pulli.
        ".m"    :   "\u0B82", // $ஂ TAMIL SIGN ANUSVARA • not used in Tamil
        ".n"    :   "\u0B82", // $ஂ TAMIL SIGN ANUSVARA • not used in Tamil
        "M"     :   "\u0B82", // $ஂ TAMIL SIGN ANUSVARA • not used in Tamil
        "H"     :   "\u0B83", // ஃ TAMIL SIGN VISARGA = aytham • in fonts which display the Tamil pulli as a ring shape, the glyph for aytham also uses rings
        ".a"    :   "\u0B85", // அ TAMIL LETTER A // ADDED
        ".h"    :   "\u0BCD", // $் TAMIL SIGN VIRAMA = pulli

        // Various signs
        //""    :   "\u0BD1", // " <reserved>
        //""    :   "\u0BD2", // " <reserved>
        //""    :   "\u0BD3", // " <reserved>
        //""    :   "\u0BD4", // " <reserved>
        //""    :   "\u0BD5", // " <reserved>
        //""    :   "\u0BD6", // " <reserved>
        //""    :   "\u0BD7", // $ௗ TAMIL AU LENGTH MARK

        // Reserved
        //For viram punctuation, use the generic Indic 0964 and 0965.
        //""    :   "\u0BE4", // " <reserved> → 0964 ।  devanagari danda
        //""    :   "\u0BE5", // " <reserved> → 0965 ॥  devanagari double danda

        // Digits
        "0"     :   "\u0BE6", // ௦ TAMIL DIGIT ZERO
        "1"     :   "\u0BE7", // ௧ TAMIL DIGIT ONE
        "2"     :   "\u0BE8", // ௨ TAMIL DIGIT TWO
        "3"     :   "\u0BE9", // ௩ TAMIL DIGIT THREE
        "4"     :   "\u0BEA", // ௪ TAMIL DIGIT FOUR
        "5"     :   "\u0BEB", // ௫ TAMIL DIGIT FIVE
        "6"     :   "\u0BEC", // ௬ TAMIL DIGIT SIX
        "7"     :   "\u0BED", // ௭ TAMIL DIGIT SEVEN
        "8"     :   "\u0BEE", //௮ TAMIL DIGIT EIGHT
        "9"     :   "\u0BEF", // ௯ TAMIL DIGIT NINE

        // Tamil numerics
        //""    :   "\u0BF0", // ௰ TAMIL NUMBER TEN
        //""    :   "\u0BF1", // ௱ TAMIL NUMBER ONE HUNDRED
        //""    :   "\u0BF2", // ௲ TAMIL NUMBER ONE THOUSAND

        // Tamil symbols
        //""    :   "\u0BF3", // ௳ TAMIL DAY SIGN = naal
        //""    :   "\u0BF4", // ௴ TAMIL MONTH SIGN = maatham
        //""    :   "\u0BF5", // ௵ TAMIL YEAR SIGN = varudam
        //""    :   "\u0BF6", // ௶ TAMIL DEBIT SIGN = patru
        //""    :   "\u0BF7", // ௷ TAMIL CREDIT SIGN = varavu
        //""    :   "\u0BF8", // ௸ TAMIL AS ABOVE SIGN = merpadi
        // Currency symbol
        //""    :   "\u0BF9", // ௹ TAMIL RUPEE SIGN = rupai

        // Tamil symbol
        //""    :   "\u0BFA", // ௺ TAMIL NUMBER SIGN = enn

        // Sign: Manually added from Devanagari
        ","     :   "\u0964", // । DEVANAGARI DANDA = purna viram • phrase separator
        "."     :   "\u0965"  // ॥ DEVANAGARI DOUBLE DANDA = deergh viram
    },

    // Virama   // The Tamil pulli usually displays as a dot above, but in some fonts displays as a ring above. Do not use 0B82 to represent a ring-shaped pulli.
    "VIRAMA"    :   "\u0BCD"  // $் TAMIL SIGN VIRAMA = pulli
};