// Callaback funtion is a fucntion passed to another function as an argument,
// which is then invoked inside the outer function to complete an action.
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Script Loaded: " + src)
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loading the script with SRC: " + src);
        callback(new Error("Src got some error"))
    }

    document.body.appendChild(script);
} 

function hello(error, src){
    if (error){
        console.log('error')
        return
    }
    alert("Hello World!" + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src){
    if (error){
        console.log('error')
        sendEmergencyMessageToCeo();
        return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src){
        if (error){
            console.log('error')
            sendEmergencyMessageToCeo();
            return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src){
            if (error){
                console.log('error')
                sendEmergencyMessageToCeo();
                return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src){
                if (error){
                    console.log('error')
                    sendEmergencyMessageToCeo();
                    return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src){
                    if (error){
                        console.log('error')
                        sendEmergencyMessageToCeo();
                        return
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src){
                        if (error){
                            console.log('error')
                            sendEmergencyMessageToCeo();
                            return
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src){
                            if (error){
                                console.log('error')
                                sendEmergencyMessageToCeo();
                                return
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src){
                                if (error){
                                    console.log('error')
                                    sendEmergencyMessageToCeo();
                                    return
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src){
                                    if (error){
                                        console.log('error')
                                        sendEmergencyMessageToCeo();
                                        return
                                    }
                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src){
                                        if (error){
                                            console.log('error')
                                            sendEmergencyMessageToCeo();
                                            return
                                        }
                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap10.bundle.min.js", function goodmorning(error, src){
                                            if (error){
                                                console.log('error')
                                                sendEmergencyMessageToCeo();
                                                return
                                            }
                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap11.bundle.min.js", function goodmorning(error, src){
                                                if (error){
                                                    console.log('error')
                                                    sendEmergencyMessageToCeo();
                                                    return
                                                }
                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap12.bundle.min.js", function goodmorning(error, src){
                                                    if (error){
                                                        console.log('error')
                                                        sendEmergencyMessageToCeo();
                                                        return
                                                    }
                                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap13.bundle.min.js", function goodmorning(error, src){
                                                        if (error){
                                                            console.log('error')
                                                            sendEmergencyMessageToCeo();
                                                            return
                                                        }
                                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap14.bundle.min.js", function goodmorning(error, src){})
                                                    })                                                 
                                                })                                             
                                            })                                         
                                        })                                     
                                    })                                 
                                })                             
                            })                       
                        })  
                    })
                })               
            })
        })
    })
})





