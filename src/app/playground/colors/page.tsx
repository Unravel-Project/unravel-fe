import BasePage from "@/components/Playground/BasePage";

const COLOR_LIST = [
  {
    groupName: 'Primary',
    list: [
      {
        label: 'Primary 500',
        hex: '#072149',
        className: 'bg-primary-500'
      },
      {
        label: 'Primary 400',
        hex: '#176EF1',
        className: 'bg-primary-400'
      },
      {
        label: 'Primary 300',
        hex: '#73A8F7',
        className: 'bg-primary-300'
      },
      {
        label: 'Primary 200',
        hex: '#B9D3FB',
        className: 'bg-primary-200'
      },
      {
        label: 'Primary 100',
        hex: '#E8EDFB',
        className: 'bg-primary-100'
      },
    ]
  },
  {
    groupName: 'Secondary',
    list: [
      {
        label: 'Secondary 500',
        hex: '#0C4C3B',
        className: 'bg-secondary-500'
      },
      {
        label: 'Secondary 400',
        hex: '#117358',
        className: 'bg-secondary-400'
      },
      {
        label: 'Secondary 300',
        hex: '#A5E5D4',
        className: 'bg-secondary-300'
      },
      {
        label: 'Secondary 200',
        hex: '#A5E5D4',
        className: 'bg-secondary-200'
      },
      {
        label: 'Secondary 100',
        hex: '#E8F9F4',
        className: 'bg-secondary-100'
      },
    ]
  },
  {
    groupName: 'Accent',
    list: [
      {
        label: 'Accent 500',
        hex: '#755100',
        className: 'bg-accent-500'
      },
      {
        label: 'Accent 400',
        hex: '#E3C37A',
        className: 'bg-accent-400'
      },
      {
        label: 'Accent 300',
        hex: '#FFDF99',
        className: 'bg-accent-300'
      },
      {
        label: 'Accent 200',
        hex: '#FFF2D6',
        className: 'bg-accent-200'
      },
      {
        label: 'Accent 100',
        hex: '#FFF9EB',
        className: 'bg-accent-100'
      },
    ]
  },
  {
    groupName: 'Neutral Coolgray',
    list: [
      {
        label: 'Coolgray 900',
        hex: '#22242A',
        className: 'bg-neutral-coolgray-900'
      },
      {
        label: 'Coolgray 800',
        hex: '#393D46',
        className: 'bg-neutral-coolgray-800'
      },
      {
        label: 'Coolgray 700',
        hex: '#676D7E',
        className: 'bg-neutral-coolgray-700'
      },
      {
        label: 'Coolgray 500',
        hex: '#9DA1AF',
        className: 'bg-neutral-coolgray-500'
      },
      {
        label: 'Coolgray 400',
        hex: '#D5D7DD',
        className: 'bg-neutral-coolgray-400'
      },
      {
        label: 'Coolgray 100',
        hex: '#F1F2F4',
        className: 'bg-neutral-coolgray-100'
      },
    ]
  }
]

const ColorsPage = () => {
  return (
    <BasePage
      pageTitle="Colors"
      pageDescription="This page displays the application's color palette, providing an overview of the primary, secondary, and accent colors used throughout the design"
      withPreview={false}
    >
      {COLOR_LIST.map((group, index) => (
        <div className="flex flex-col gap-4 w-full mb-4" key={`color-group-${index}`}>
          <h2 className="text-2xl text-neutral-coolgray-900 font-bold">{group.groupName}</h2>
          <div className="grid grid-cols-8 gap-4">
            {group.list.map((list, listIndex) => (
              <div className="rounded-lg min-h-40 h-fit shadow-md" key={`color-list-${listIndex}`}>
                <div className={`h-20 ${list.className} rounded-t-lg`} />
                <div className="flex flex-col p-4">
                  <div className="font-bold">{list.label}</div>
                  <div className="text-neutral-coolgray-700">{list.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
    </BasePage>
  )
}

export default ColorsPage;
  