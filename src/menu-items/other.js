// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';
import Diversity3Icon from '@mui/icons-material/Diversity3';


// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'membership-request',
      title: 'Membership Requests',
      type: 'item',
      url: '/membership-request',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'members',
      title: 'Members ',
      type: 'item',
      url: '/members',
      icon: Diversity3Icon,
      breadcrumbs: false
    },
    // {
    //   id: 'documentation',
    //   title: 'Documentation',
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/berry/',
    //   icon: icons.IconHelp,
    //   external: true,
    //   target: true
    // }
  ]
};

export default other;
