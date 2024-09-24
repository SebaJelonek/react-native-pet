import { Text, View, TouchableOpacity } from 'react-native';
import {Slot} from 'expo-router';
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(15);

  useEffect(()=>{
    let countdown

    
    countdown = setInterval(()=>{
      setTimer((prevState)=>prevState-1)
    }, 1000)
    
    
    const timeOut = setTimeout(() => {
      if(message !== '')
        setMessage('')
      }, 3000);

      if (timer === 0)
      {
        clearInterval(countdown)
        setTimer(15)
        console.log(timer)
      }
      console.log(timer)
      

    return () => {
      clearTimeout(timeOut)
      clearInterval(countdown)
    }
      
      
  }, [message])

  const addCount = () => {setCount(count+1)}
  const substractCount = () => {
    if (count > 0)  setCount(count-1)
    if (count < 1)  setMessage('you can not go below 0')
  }

  return (
    <View className={'flex-1 items-center justify-center bg-zinc-700 flex-col pt-20'}>
      <View>
        <Text>{timer}</Text>
      </View>
      <View className={'flex-1 items-center justify-center bg-zinc-700 flex-row pt-20'}>
        <TouchableOpacity className='items-center' onPress={substractCount}>
          <Text className='bg-cyan-600 h-8 w-8 text-center text-zinc-200 text-xl'>-1</Text>
        </TouchableOpacity>
        <Text className={'text-amber-100 text-3xl m-2'}>{count}</Text>
        <TouchableOpacity className='items-center'onPress={addCount}>
          <Text className='bg-cyan-600 h-8 w-8 text-center text-zinc-200 text-xl'>+1</Text>
        </TouchableOpacity>
      </View>
      <View className='flex-col'>
          <Text className="text-cyan-300 text-lg drop-shadow-lg shadow-lg h-10">{message}</Text>
      </View>
    </View>
  );
}