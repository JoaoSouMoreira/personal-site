import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import ToolBar from './ToolBar.vue';
import HomePage from '../pages/HomePage';
import AzoresPage from '../pages/AzoresPage';
import ProjectsPage from '../pages/ProjectsPage';

describe('ToolBar', () => {

  const $router = {
    options: {
      routes: [
        {
          path: '/',
          component: HomePage,
          name: 'Home',
          meta: {
            sections: [],
          },
        },
        {
          path: '/azores',
          component: AzoresPage,
          name: 'Where I am from',
          meta: {
            sections: [],
          },
        },
        {
          path: '/projects',
          component: ProjectsPage,
          name: 'Projects',
          meta: {
            sections: [],
          },
        },
      ],
    },
  };

  it('renders correctly the app routes', () => {
    const $route = {};

    const expectedHtml = `
<div class="toolbar-container" sections="">
  <ul class="menu">
    <li class="menu-item"><a class="menu-link">
        Home
      </a></li>
    <li class="menu-item"><a class="menu-link">
        Where I am from
      </a></li>
    <li class="menu-item"><a class="menu-link">
        Projects
      </a></li>
  </ul>
</div>`;

    const component = shallowMount(ToolBar, {
      propsData: {
        sections: [],
      },
      mocks: {
        $router,
        $route,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    }).html();

    expect(component.trim()).toBe(expectedHtml.trim());
  });

  it('renders correctly with the azores page being active', () => {
    const $route = {
      name: 'Where I am from',
    };

    const expectedHtml = `
<div class="toolbar-container" sections="">
  <ul class="menu">
    <li class="menu-item"><a class="menu-link">
        Home
      </a></li>
    <li class="menu-item"><a class="menu-link active">
        Where I am from
      </a></li>
    <li class="menu-item"><a class="menu-link">
        Projects
      </a></li>
  </ul>
</div>`;

    const component = shallowMount(ToolBar, {
      propsData: {
        sections: [],
      },
      mocks: {
        $router,
        $route,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    }).html();

    expect(component.trim()).toBe(expectedHtml.trim());
  });
});
