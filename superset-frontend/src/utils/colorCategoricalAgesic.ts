import { CategoricalScheme } from '@superset-ui/core';

const schemes = [
  {
    id: 'gubuyCategory20c',
    label: 'gub.uy Category 20c',
    colors: [
      '#0E3192',
      '#194DA0',
      '#FFFFFF',
      '#333333',
      '#FECB01',
      '#00A9E0',
      '#007D8A',
      '#006A8E',
      '#DAAA00',
      '#CEDC00',
      '#4A773C',
      '#FF6900',
      '#897A27',
      '#73531D',
      '#CB333B',
      '#93272C',
      '#FF0000',
      '#28A745',
      '#198580',
      '#0099FF',
      '#93117E'
    ],
  },
].map(s => new CategoricalScheme(s));

export default schemes;

