// spread operator
const friends = ["Rahim","Karim"]
const schoolFriends = ["Bulbul","Shamim", "Rezza"];

friends.push(...schoolFriends)
friends.push(...schoolFriends)

// console.log(friends);



// rest operator 
 const sendInvite =  (...friends:string[] ) => {
    friends.forEach((friend:string) =>{
        console.log(`Send invitation to ${friend}`)
    })
 }

sendInvite ("pintu", "rintu" , "bulbul")
 