function StartClassifiction()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ii5sTJ_9C/model.json', modelReady);
}

function modelReady()
{
    classifier.classify( gotResults)
}

function gotResults()
{
    
}