import { shallowMount } from '@vue/test-utils';
import Sidebar from './Sidebar.vue';

describe('Sidebar', () => {
  it('renders correctly with no route sections', () => {
    const $router = {
      currentRoute: {
        meta: {
          sections: [],
        },
      },
    };

    const expectedHtml = `
<div class="sidebar-container" sections="">
  <ul class="menu"></ul>
  <ul class="social-media">
    <li><a href="https://github.com/JoaoSouMoreira" target="_blank" class="social-media-item"><img src="/assets/images/Github-Mark-Light-64px.png" alt="Github"></a></li>
    <li><a href="https://www.linkedin.com/in/joaosousamoreira" target="_blank" class="social-media-item"><img src="/assets/images/Linkedin-icon.png" alt="LinkedIn"></a></li>
    <li class="text-item"><a href="" class="social-media-item social-media-text">CV</a></li>
    <li class="text-item"><a href="mailto:joaosomoreira@gmail.com?Subject=Awesome%20Website%21" class="social-media-item social-media-text">@</a></li>
    <li><a href="https://www.instagram.com/joaosomoreira" target="_blank" class="social-media-item"><img src="/assets/images/Instagram-icon.png" alt="Instagram"></a></li>
  </ul>
</div>`;

    const component = shallowMount(Sidebar, {
      propsData: {
        sections: [],
      },
      mocks: {
        $router,
      }
    }).html();

    expect(component.trim()).toBe(expectedHtml.trim());
  });

  it('renders correctly with two sections in the route', () => {
    const $router = {
      currentRoute: {
        meta: {
          sections: [
            { path: 'introduction', name: 'Introduction' },
            { path: 'suggestions', name: 'Suggestions' },
          ],
        },
      },
    };

    const expectedHtml = `
<div class="sidebar-container" sections="">
  <ul class="menu">
    <li><a class="section-link active">Introduction</a></li>
    <li><a class="section-link">Suggestions</a></li>
  </ul>
  <ul class="social-media">
    <li><a href="https://github.com/JoaoSouMoreira" target="_blank" class="social-media-item"><img src="/assets/images/Github-Mark-Light-64px.png" alt="Github"></a></li>
    <li><a href="https://www.linkedin.com/in/joaosousamoreira" target="_blank" class="social-media-item"><img src="/assets/images/Linkedin-icon.png" alt="LinkedIn"></a></li>
    <li class="text-item"><a href="" class="social-media-item social-media-text">CV</a></li>
    <li class="text-item"><a href="mailto:joaosomoreira@gmail.com?Subject=Awesome%20Website%21" class="social-media-item social-media-text">@</a></li>
    <li><a href="https://www.instagram.com/joaosomoreira" target="_blank" class="social-media-item"><img src="/assets/images/Instagram-icon.png" alt="Instagram"></a></li>
  </ul>
</div>`;

    const component = shallowMount(Sidebar, {
      propsData: {
        sections: [],
      },
      mocks: {
        $router,
      }
    }).html();

    expect(component.trim()).toBe(expectedHtml.trim());
  });
});
