import { View, Text } from 'react-native'
import React from 'react'
//This is for showing the client how much of their 
//retirement is taken care of. Maybe use a pie chart
//of some kind based on hasltc, haslife, hco, and hascanpol/hasdental
const RetirementReview = (hasSpouse, firstName, 
        lastName, spouseFirstName, spouseLastName, 
        hasadv, spousehasadv, 
        hplan1, hprem1, hplan2, hprem2, 
        hco1, hco2, concerns, rxco1, rxco2,
        changes, hasltc, nhconcerns, hascanpol,
        hasdental, 

        ) => {

          
  return (
    <View>
      <Text>RetirementReview</Text>
    </View>
  )
}

export default RetirementReview