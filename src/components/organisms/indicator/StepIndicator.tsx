import React from 'react'
import { View } from 'react-native';
import Steps from 'react-native-step-indicator';
import { getBaseColors } from '../../../const';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: getBaseColors().PRIMARY,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: getBaseColors().PRIMARY,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: getBaseColors().PRIMARY,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: getBaseColors().PRIMARY,
  stepIndicatorUnFinishedColor: getBaseColors().DOMINANT,
  stepIndicatorCurrentColor: getBaseColors().DOMINANT,
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: getBaseColors().PRIMARY,
  stepIndicatorLabelFinishedColor: getBaseColors().DOMINANT,
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: getBaseColors().TEXT,
  labelSize: 13,
  currentStepLabelColor: getBaseColors().PRIMARY
}

interface Props{
  labels: string[]
  step: number
}

export default function StepIndicator({labels, step}: Props) {
  return (
    <View style={{width: '90%'}}>
      <Steps
        customStyles={customStyles}
        currentPosition={step}
        stepCount={labels.length}
        labels={labels}
      />
    </View>
  )
}