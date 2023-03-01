import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export default function AccountCard() {
  return (
    <View className="bg-light py-3 px-1 rounded-md  flex-row items-center gap-x-3 mb-3">
      <Image
        source={require('../../../../assets/artist.png')}
        className="w-10 h-10 rounded-full"
      />
      <View className="w-[78%]">
        <View className="flex-row w-full justify-between">
          <Text className="font-semibold">Account Name</Text>
          <View className="bg-gray100 rounded-full py-1 px-3 ">
            <Text className=" text-gray text-center">Category</Text>
          </View>
        </View>
        <Text className=" text-gray text-sm">Account username</Text>
      </View>
    </View>
  );
}
