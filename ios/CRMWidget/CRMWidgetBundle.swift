//
//  CRMWidgetBundle.swift
//  CRMWidget
//
//  Created by Dev on 12/10/23.
//

import WidgetKit
import SwiftUI

@main
struct CRMWidgetBundle: WidgetBundle {
    var body: some Widget {
        CRMWidget()
        CRMWidgetLiveActivity()
    }
}
