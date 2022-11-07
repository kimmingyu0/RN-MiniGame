import { Text, View } from "react-native";

// RN의 공식 github 계정을 살펴보면 <Button>
// 구조가 <View><Text> 조합인걸 알 수 있다.
const PrimaryButton = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;