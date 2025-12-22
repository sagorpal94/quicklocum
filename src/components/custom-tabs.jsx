import React, { useState, useEffect, useMemo } from 'react';

const CustomTabs = ({
                  children,
                  setCurrentTab,
                  currentTab,
                  setActiveChannel,
                  currentRole,
                  underline,
                  loadingMore,
                  contentClass = ""
              }) => {
    // 1. Normalize children: Handles single child, array, or nulls automatically
    const tabs = useMemo(() => {
        return React.Children.toArray(children).filter((child) => React.isValidElement(child));
    }, [children]);

    if (tabs.length === 0) return null;

    // 2. Initialize State
    const [activeTab, setActiveTab] = useState(tabs[0].props.label);

    // 3. Effects

    // Sync with external control (currentTab prop)
    useEffect(() => {
        if (currentTab !== undefined && currentTab !== null) {
            setActiveTab(currentTab);
        }
    }, [currentTab]);

    // Reset to first tab if currentRole changes
    useEffect(() => {
        if (tabs.length > 0) {
            const firstTabLabel = tabs[0].props.label;
            setActiveTab(firstTabLabel);
            if (setCurrentTab) setCurrentTab(firstTabLabel);
        }
    }, [currentRole]); // eslint-disable-line react-hooks/exhaustive-deps

    // Ensure activeTab is valid (if children change dynamically)
    useEffect(() => {
        const labels = tabs.map(t => t.props.label);
        if (!labels.includes(activeTab) && labels.length > 0) {
            setActiveTab(labels[0]);
        }
    }, [tabs, activeTab]);

    // 4. Handlers
    const handleClick = (e, label) => {
        e.preventDefault();
        if (loadingMore) return;

        setActiveTab(label);

        if (setCurrentTab) {
            setCurrentTab(label);
        }

        if (setActiveChannel) {
            setActiveChannel({});
        }
    };

    return (
        <div className="w-full">
            {/* Tabs Header */}
            <ul className="flex flex-nowrap overflow-x-auto whitespace-nowrap list-none p-0 mt-4 bg-white scrollbar-hide">
                {tabs.map((tab) => {
                    const label = tab.props.label;
                    const isActive = label === activeTab;

                    return (
                        <li
                            key={label}
                            onClick={(e) => handleClick(e, label)}
                            className={`
                                float-left border-none outline-none cursor-pointer 
                                px-2.5 pb-1.5 mr-5 rounded-full transition-all duration-300
                                text-xs font-bold
                                ${isActive
                                ? 'bg-[#4F4F4F] text-white'
                                : 'bg-white text-[#4F4F4F] hover:bg-gray-100'
                            }
                                ${loadingMore ? 'opacity-50 pointer-events-none' : ''}
                            `}
                        >
                            {/* Replaced <a> with span for better semantics, or keep <a> if needed for SEO */}
                            <span>{label}</span>
                        </li>
                    );
                })}
            </ul>

            {/* Underline Decoration */}
            {underline && (
                <div className="w-full relative bg-[#eee] mt-1">
                    <div className="absolute left-0 bottom-0 w-full border-b border-[#828282]"></div>
                </div>
            )}

            {/* Tab Content */}
            <div className={`mt-4 ${contentClass}`}>
                {tabs.map((tab) => {
                    if (tab.props.label === activeTab) {
                        return <div key={tab.props.label}>{tab.props.children}</div>;
                    }
                    return null;
                })}
            </div>

            {/* Utility style for hiding scrollbar (Tailwind doesn't have this by default without plugins) */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default React.memo(CustomTabs);