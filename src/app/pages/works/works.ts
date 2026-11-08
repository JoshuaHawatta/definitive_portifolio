import { Component, HostListener, signal } from '@angular/core';
import { Cta } from '../../components/cta/cta';
import { Bars } from '../../components/bars/bars';

interface Work {
  company: string;
  role: string;
  invert: boolean;
  url?: string;
  highlights: { title: string; text: string }[];
  stack: string[];
}

@Component({
  imports: [Cta, Bars],
  selector: 'app-works',
  styleUrl: './works.scss',
  templateUrl: './works.html',
})
export class Works {
  works: Work[] = [
    {
      company: 'Stefanini S.A.',
      role: 'Fullstack Developer',
      invert: false,
      highlights: [
        {
          title: 'Cloud Architecture',
          text: 'Engineered microservices with Spring Boot, orchestrating deploys across AWS and Azure for high availability.',
        },
        {
          title: 'Enterprise Security',
          text: 'Implemented mission-critical security features, including robust batch signature solutions for legal contracts.',
        },
        {
          title: 'Cyber Security',
          text: 'Integrated Microsoft EntraID to guard internal systems.',
        },
        {
          title: 'Financial Compliance',
          text: 'Developed tracking tools to identify arrears and ensure strict compliance with federal tax regulations.',
        },
      ],
      url: 'https://stefanini.com/pt/',
      stack: ['Spring Boot', 'Angular', 'AWS', 'Azure'],
    },
    {
      company: 'Engesoftware S.A.',
      role: 'Fullstack Developer',
      invert: true,
      highlights: [
        {
          title: 'System redesign',
          text: 'Spearheaded the transition of legacy systems into a modern, high-performance architecture.',
        },
        {
          title: 'Fraud Prevention',
          text: 'Developed an agribusiness billing platform that cut fraudulent transactions by nearly 60% using Strapi-based payment tracking.',
        },
        {
          title: 'API Integrations',
          text: 'Integrated real-time data from the Brazilian Federal Revenue Service API to instantly verify client authenticity.',
        },
        {
          title: 'UI/UX',
          text: 'Designed and delivered fast and highly responsive interfaces.',
        },
      ],
      url: 'https://www.engesoftware.com/',
      stack: ['Spring Boot', 'Angular', 'AWS', 'Azure'],
    },
    {
      company: 'Coding Freelancing',
      role: 'Fullstack Developer',
      invert: false,
      highlights: [
        {
          title: 'Startups',
          text: 'Delivered end-to-end full-stack development and strategic tech consulting for growing startups.',
        },
        {
          title: 'Product Engineering (E-Learning)',
          text: "Co-developed 'Aprende+', a modern and accessible online course platform.",
        },
        {
          title: 'Cloud',
          text: 'Orchestrated and deployed apps environments across AWS, Azure and Docker to guarantee reliable and high-performance.',
        },
        {
          title: 'Mentorship',
          text: 'Mentored new developers and taught programming fundamentals, boosting their integration into the tech industry.',
        },
      ],
      stack: ['Spring Boot', 'Angular', 'AWS', 'Azure', 'Next.js', 'Node.js', 'Docker'],
    },
    {
      company: 'CBOO',
      role: 'Fullstack Developer',
      invert: true,
      highlights: [
        {
          title: 'Business Growth',
          text: "Built a React Native app from scratch to display legal credentials, boosting new partner acquisitions and elevating the organisation's reputation.",
        },
        {
          title: 'Automation',
          text: 'Architected robust microservices, including automated PDF generators and data-heavy CSV processing tools.',
        },
        {
          title: 'System redesign',
          text: 'Re-engineered legacy PHP codebases into highly maintainable, responsive web applications using Next.js and Node.js.',
        },
        {
          title: 'CI/CD',
          text: 'Overhauled the deployment pipeline on Hostinger Cloud.',
        },
      ],
      url: 'https://www.cboo.org.br/',
      stack: ['Reactive Native', 'PHP', 'Next.js'],
    },
    {
      company: 'Design Freelancing',
      role: 'Branding and Logo Designer',
      invert: false,
      highlights: [
        {
          title: 'Lave U',
          text: 'Rebranded a laundry business design, creating a friendly visual identity.',
        },
        {
          title: 'Ana Trajano',
          text: 'Created a brand new logo for the English teacher Ana Trajano, inspired in British schools such as Oxford and UCL.',
        },
        {
          title: 'UI/UX',
          text: 'Expert with Figma, focused on website building.',
        },
        {
          title: 'Consulting',
          text: 'Worked as consultant design, helping startups and other designers on rebranding their visual identity.',
        },
      ],
      stack: ['Figma', 'Procreate'],
    },
  ];

  current = signal(0);

  private lockUntil = 0;
  private touchStartY = 0;

  go(index: number) {
    const next = Math.max(0, Math.min(this.works.length - 1, index));
    if (next === this.current()) return;
    this.current.set(next);
    this.lockUntil = performance.now() + 800; // TRANSITION TIME
  }

  onWheel(e: WheelEvent) {
    e.preventDefault();
    const now = performance.now();

    // BLOCK SCROLL JUST SO THE USER DOESN'T JUMP A SECTION UNWILLINGLY

    if (now < this.lockUntil) {
      this.lockUntil = Math.max(this.lockUntil, now + 120);
      return;
    }

    if (Math.abs(e.deltaY) < 10) return;
    this.go(this.current() + Math.sign(e.deltaY));
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartY = e.touches[0].clientY;
  }

  onTouchEnd(e: TouchEvent) {
    if (performance.now() < this.lockUntil) return;
    const diff = this.touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) this.go(this.current() + Math.sign(diff));
  }

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (['ArrowDown', 'PageDown'].includes(e.key)) this.go(this.current() + 1);
    if (['ArrowUp', 'PageUp'].includes(e.key)) this.go(this.current() - 1);
  }
}
