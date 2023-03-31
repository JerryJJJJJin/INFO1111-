function wordcount(text, target) {
    let words = text.split(" ");
    let wordcount = words.length;

    if (target * 0.9 <= wordcount && wordcount <= target * 1.1) {
        console.log("You have written " + wordcount + " words. You have reached the word count!");
    }

    else if (wordcount < target * 0.9) {
        wordsleft = target * 0.9 - wordcount;
        console.log("You have written " + wordcount + " words. You have " + wordsleft + " to go.");
    }

    else if (wordcount > target * 1.1) {
        wordsover = wordcount - target * 1.1;
        console.log("You have written " + wordcount + " words. You are " + wordsover + " words over.");
    }
}

essay = "Hello my name is Jerry, I love to chat and chat and chat and chat."





wordcount(essay, 10);
