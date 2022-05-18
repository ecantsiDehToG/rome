/*
 * @Description: 
 * @Author: shenhui
 * @Date: 2022-05-18 20:04:44
 */
import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'rome template factory',
  pwa: false,
  logo: './favicon.ico', // 这是运行时的，如果配置相对路径应该是构建之后的相对路径
  iconfontUrl: '',
};

export default Settings;
