import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {theme} from '../theme';
import AccountCard from '../components/ui/cards/AccountCard';

const CATEGORIES = [
  {label: 'Social Media', id: 2},
  {label: 'Emails', id: 3},
  {label: 'Banks', id: 4},
  {label: 'Crypto wallets', id: 5},
  {label: 'Notes', id: 6},
];

export default function HomeScreen(): JSX.Element {
  return (
    <Layout>
      <View className="bg-green flex-1">
        <View className="h-20 flex-row py-3 gap-x-4 pl-4">
          <Image
            source={require('../../assets/artist.png')}
            className="w-10 h-10 rounded-full"
          />
          <View>
            <Text className="text-greenShade">Welcome back</Text>
            <Text className="text-light font-bold text-xl">
              Felix K. Asante
            </Text>
          </View>
        </View>
        <ScrollView className="flex-1 bg-gray100 rounded-tr-[28px] rounded-tl-[28px] p-4">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="font-semibold text-lg">Categories</Text>
              <TouchableOpacity>
                <Icon icon="folder-plus" size={24} color={theme.colors.blue} />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="flex-row gap-x-4 mt-3 overflow-x-scroll">
              {CATEGORIES.map(category => (
                <View className="bg-gray p-2 rounded-md" key={category.id}>
                  <Text className="capitalize">{category.label}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View className="mt-6">
            <Text className="font-semibold text-lg">New Accounts</Text>
            <View className="gap-y-4 mt-2 mx-2">
              <AccountCard />
              <AccountCard />
              <AccountCard />
              <AccountCard />
              <AccountCard />
              <AccountCard />
            </View>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
}
