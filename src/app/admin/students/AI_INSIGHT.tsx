export default function AI_INSIGHT() {
    return (
        (
            <aside className="hidden xl:block w-80 bg-primary-blue p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <span className="text-2xl mr-2">⭐</span>
                        <h3 className="text-lg font-semibold text-white">AI Insights</h3>
                    </div>
                    <button className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition-colors text-white">
                        View More
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-white/90 leading-relaxed">
                            Bellow Aisha has been absent for two weeks. Suggest calling the parents.
                        </p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-white/90 leading-relaxed">
                            10 students in this class show low performance in English. Suggest having an extra class.
                        </p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-white/90 leading-relaxed">
                            AI recommends rescheduling Mathematics for JSS2 due to clashes.
                        </p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-white/90 leading-relaxed">
                            Ojo Babalola has not paid his School fee.
                        </p>
                    </div>
                </div>
            </aside>
        )

    )
}