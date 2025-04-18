import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import { IconProps } from "phosphor-react-native";
import { ArrowLeft } from "phosphor-react-native";

type Props = {
  title: string;
  subtitle: string;
  onPress?: () => void;
  backButton?: boolean;
  icon?: React.FC<IconProps>;
};

export function Header({ title, subtitle, icon: Icon, onPress, backButton }: Props) {
  return (
    <View style={styles.container}>
      {backButton && (
        <View>
          <TouchableOpacity
            style={[
              {
                marginRight: 12,
              },
            ]}
            activeOpacity={0.7}
            onPress={onPress}>
            <ArrowLeft size={28} color={THEME.COLORS.GREY_100} />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {Icon && onPress && (
        <TouchableOpacity style={styles.history} activeOpacity={0.7} onPress={onPress}>
          <Icon size={28} color={THEME.COLORS.GREY_800} />
        </TouchableOpacity>
      )}
    </View>
  );
}
