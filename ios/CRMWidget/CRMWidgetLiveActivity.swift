//
//  CRMWidgetLiveActivity.swift
//  CRMWidget
//
//  Created by Dev on 12/10/23.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct CRMWidgetAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        // Dynamic stateful properties about your activity go here!
        var emoji: String
    }

    // Fixed non-changing properties about your activity go here!
    var name: String
}

struct CRMWidgetLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: CRMWidgetAttributes.self) { context in
            // Lock screen/banner UI goes here
            VStack {
                Text("Hello \(context.state.emoji)")
            }
            .activityBackgroundTint(Color.cyan)
            .activitySystemActionForegroundColor(Color.black)

        } dynamicIsland: { context in
            DynamicIsland {
                // Expanded UI goes here.  Compose the expanded UI through
                // various regions, like leading/trailing/center/bottom
                DynamicIslandExpandedRegion(.leading) {
                    Text("Leading")
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text("Trailing")
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text("Bottom \(context.state.emoji)")
                    // more content
                }
            } compactLeading: {
                Text("L")
            } compactTrailing: {
                Text("T \(context.state.emoji)")
            } minimal: {
                Text(context.state.emoji)
            }
            .widgetURL(URL(string: "http://www.apple.com"))
            .keylineTint(Color.red)
        }
    }
}

extension CRMWidgetAttributes {
    fileprivate static var preview: CRMWidgetAttributes {
        CRMWidgetAttributes(name: "World")
    }
}

extension CRMWidgetAttributes.ContentState {
    fileprivate static var smiley: CRMWidgetAttributes.ContentState {
        CRMWidgetAttributes.ContentState(emoji: "😀")
     }
     
     fileprivate static var starEyes: CRMWidgetAttributes.ContentState {
         CRMWidgetAttributes.ContentState(emoji: "🤩")
     }
}

#Preview("Notification", as: .content, using: CRMWidgetAttributes.preview) {
   CRMWidgetLiveActivity()
} contentStates: {
    CRMWidgetAttributes.ContentState.smiley
    CRMWidgetAttributes.ContentState.starEyes
}
