local config = import 'default.jsonnet';

config {
  'planq_7000-1'+: {
    'app-config'+: {
      pruning: 'everything',
      'state-sync'+: {
        'snapshot-interval': 0,
      },
    },
  },
}
