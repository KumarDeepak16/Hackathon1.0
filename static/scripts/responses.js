function getBotResponse(input) {
    if (input == "1") {
        return " Health is important to live life to the fullest. When a person leads a healthy lifestyle, the body remains healthy and the mind is active and fresh. Living a healthy life would extend longevity and also regenerate the body and mind";
    } else if (input == "2") {
        return " Keeping body fit is the another important work and to achive this we should     ● take balanced diet   ● perform yoga  ● avoid fasty food  ● avoid drugs   ● perform some physical activity";
    } else if (input == "3") {
        return "The law is important because it acts as a guideline as to what is accepted in society   It prohibits discrimination based on caste, religion, sex etc. These laws were enacted for the upliftment of women so that they live an honourable and dignified life.";
    }
    else if (input == "Women helpline no") {
        return "1091 / 112";
    }
    else if (input == "4") {
        return "1091 / 112";
    }

    else if (input == "5") {
        return "here are various type of schemes which govt. Implement to betterment the girl child";
    }
    
    // Simple responses
    if (input == "hello") {
        return "Hello there! How may i help you?";
    } 
    if (input == "hi") {
        return "Which type of assistance do you want ? 1.Women health, 2.How to be fit in daily life, 3.Laws related to women crime, 4.Women helpline no, 5.Scheme and other beneficial things.";
    } 
    else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}


