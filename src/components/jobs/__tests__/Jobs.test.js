import { render, screen } from '@testing-library/react';

import Job from '../Job';

const job = {
  id: 2,
  company: 'Manage',
  logo: './images/manage.svg',
  new: true,
  featured: true,
  position: 'Fullstack Developer',
  role: 'Fullstack',
  level: 'Midweight',
  postedAt: '1d ago',
  contract: 'Part Time',
  location: 'Remote',
  languages: ['Python'],
  tools: ['React'],
};

describe('Job component testing', () => {
  test('Company name', () => {
    render(<Job job={job} />);

    const companyName = screen.getByText(/Manage/i);

    expect(companyName).toBeInTheDocument();
  });
  test('New tag', () => {
    render(<Job job={job} />);

    const newTag = screen.getByLabelText('new-tag');

    expect(newTag).toBeInTheDocument();
  });
  test('Featured tag', () => {
    render(<Job job={job} />);

    const featuredTag = screen.getByLabelText('featured-tag');

    expect(featuredTag).toBeInTheDocument();
  });
  test('Position', () => {
    render(<Job job={job} />);

    const position = screen.getByText(/Fullstack Developer/i);

    expect(position).toBeInTheDocument();
  });
  test('Posted time', () => {
    render(<Job job={job} />);

    const postedAt = screen.getByText(/1d ago/i);

    expect(postedAt).toBeInTheDocument();
  });
  test('Contract', () => {
    render(<Job job={job} />);

    const contract = screen.getByText(/contract/i);

    expect(contract).toBeInTheDocument();
  });
  test('Location', () => {
    render(<Job job={job} />);

    const location = screen.getByText(/Remote/i);

    expect(location).toBeInTheDocument();
  });

  test('Right number of tags', () => {
    render(<Job job={job} />);

    const tags = screen.getAllByLabelText('tag');

    expect(tags).toEqual(4);
  });
});
